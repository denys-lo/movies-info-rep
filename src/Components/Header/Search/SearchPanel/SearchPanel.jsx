import React from 'react';
import './SearchPanel.css';
import useSWR from "swr";
import {Link} from "react-router-dom";

function SearchPanel(props) {
  const fetcher = async (url) => {
    const response =  await fetch(url);
    const parsed = await response.json();
    return parsed.results.slice(0, 5);
  }

  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US&query=${props.title}&page=1&include_adult=false`, fetcher, {fallbackData: []});

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="search_panel" onClick={() => {
      props.setTitle('');
      document.querySelector(`.search_panel__more`).style.display = 'none';
    }}>
      {data.map((movie) =>
        <Link to={`/movie/${movie.id}`}>
          <div className="movie">
            <img className="movie__img"
                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                 alt={movie.title}
                 onLoad={() => {
                   document.querySelector(`.search_panel__more`).style.display = 'inline-block'
                 }}/>
            <h4>{movie.title}</h4>
          </div>
        </Link>)}
      <Link to="/search" className="search_panel__more">More</Link>
    </div>
  );
}

export default SearchPanel;
