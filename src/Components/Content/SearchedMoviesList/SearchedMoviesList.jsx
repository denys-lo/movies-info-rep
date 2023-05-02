import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './SearchedMoviesList.css';
import {Link} from "react-router-dom";
import {getMovies} from "../../../store/moviesSlice";

function SearchedMoviesList(props) {
  const movies = useSelector(state => state.movies.movies);

  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState(movies.data);

  useEffect(() => {
    console.log(page);
    console.log(`In object: ${moviesList.total_pages}`);
    try {
      (async () => {
        const url = movies.link.replaceAll(`page=1`, `page=${page}`);
        console.log(url);
        const response = await fetch(url);
        const result = await response.json();
        setMoviesList(result)
      })();
    } catch (e) {
      console.log(e);
    } finally {
      console.log("finally");
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    setMoviesList(movies.data);
  }, [movies]);


  const checkPost = (movie) => {
    if (`https://image.tmdb.org/t/p/w500/${movie.poster_path}` === 'https://image.tmdb.org/t/p/w500/null') return 'https://dummyimage.com/250x380/000/fff.jpg';
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  }

  return movies === undefined ? <div>Please enter a movie title in the input which on the header of the website.</div> : (
    <div className="container">
      <div className="searched_list">
        {moviesList.results.map((movie) =>
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="searched_list__movie">
              <img className="movie__img" src={checkPost(movie)}
                   alt={movie.title}/>
              <h3>{movie.title}</h3>
            </div>
          </Link>)}
      </div>
      <div className="searched_list__navigation">
        <span className={page === 1 ? 'page_hidden' : 'page'} onClick={() => {
          setPage(page - 1);
        }}>Back</span>
        <span className={page !== moviesList.total_pages ? 'page' : 'page_hidden'} onClick={() => {
          setPage(page + 1);
        }}>More</span>
      </div>
    </div>
  );
}

export default SearchedMoviesList;
