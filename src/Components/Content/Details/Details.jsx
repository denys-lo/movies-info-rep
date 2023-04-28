import React from 'react';
import useSWR from "swr";
import {useParams} from "react-router-dom";
import './Details.css';
import useGetMovieInfo from "../../../hooks/useGetMovieInfo";

function Details(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovieInfo(`https://api.themoviedb.org/3/movie/${id}?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US`);

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="details" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`}}>
      <div className="container">
        <div className="details__info">
          <img className="details__poster" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.original_title}/>
          <div className="details__movie">
            <h1>{data.original_title}</h1>
            <div className="details__genres">{data.genres.map((genre) => <h3 className="genre">{genre.name}</h3>)}</div>
            <hr/>
            <p>Overview: {data.overview}</p>
            <hr/>
            <span>Release date: {data.release_date}</span>
            <hr/>
            <span>Vote average: {data.vote_average}</span>
            <hr/>
            <span>Budget: {data.budget}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
