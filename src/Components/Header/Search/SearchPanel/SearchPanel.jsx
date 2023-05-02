import React from 'react';
import './SearchPanel.css';
import useSWR from "swr";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {getMovies} from "../../../../store/moviesSlice";

function SearchPanel(props) {
  const query = props.title.replace(' ', '%20');
  const fetcher = async (url) => {
    const response =  await fetch(url);
    const parsed = await response.json();
    return parsed;
  }

  const link = `https://api.themoviedb.org/3/search/movie?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US&query=${query}&page=1&include_adult=false`;
  const { data, error, isLoading } = useSWR(link, fetcher, {fallbackData: []});

  const dispatch = useDispatch();
  const addMovies = () => {
    dispatch(getMovies({data: data, link: link}));
  }

  const checkPost = (movie) => {
    if (`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` === 'https://image.tmdb.org/t/p/w500/null') return 'https://dummyimage.com/300x150/000/fff.jpg';
    return `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  }

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="search_panel" onClick={() => {
      props.setTitle('');
      document.querySelector(`.search_panel__more`).style.display = 'none';
    }}>
      {data.results.slice(0, 5).map((movie) =>
        <Link to={`/movie/${movie.id}`} key={movie.id + "searching"}>
          <div className="movie">
            <img className="movie__img"
                 src={checkPost(movie)}
                 alt={movie.title}
                 onLoad={() => {
                   document.querySelector(`.search_panel__more`).style.display = 'inline-block'
                 }}/>
            <h4>{movie.title}</h4>
          </div>
        </Link>)}
      <Link to="/search" className="search_panel__more" onClick={addMovies}>More</Link>
    </div>
  );
}

export default SearchPanel;
