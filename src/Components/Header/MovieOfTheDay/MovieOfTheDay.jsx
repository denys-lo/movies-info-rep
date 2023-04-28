import React from 'react';
import useSWR from "swr";
import './MovieOfTheDay.css';
import {Link, useParams} from "react-router-dom";
import useGetMovies from "../../../hooks/useGetMovies";

function MovieOfTheDay(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovies('https://api.themoviedb.org/3/trending/movie/day?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef');

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <Link to={`/movie/${data[0].id}`}>
      <div className="header__topmovie" id="main">
        <img className="topmovie__poster" src={`https://image.tmdb.org/t/p/original${data[0].backdrop_path}`}
             alt={data[0].title}/>
        <div className="topmovie__info">
          <h1 className="topmovie__title"><Link to={`/movie/${data[0].id}`}>{data[0].title}</Link></h1>
          <p className="topmovie__overview">{data[0].overview}</p>
          <span className="topmovie__vote">Average score: {data[0].vote_average}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieOfTheDay;
