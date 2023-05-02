import React from 'react';
import useSWR from "swr";
import {useParams} from "react-router-dom";
import './Details.css';
import useGetMovieInfo from "../../../hooks/useGetMovieInfo";

function Details(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovieInfo(`https://api.themoviedb.org/3/movie/${id}?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US`);

  const checkBackground = (data) => {
    if (`https://image.tmdb.org/t/p/original/${data.backdrop_path}` === 'https://image.tmdb.org/t/p/original/null') return 'https://dummyimage.com/1900x1080/000/fff.jpg';
    return `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
  }

  const checkPost = (data) => {
    if (`https://image.tmdb.org/t/p/original/${data.poster_path}` === 'https://image.tmdb.org/t/p/original/null')  return 'https://dummyimage.com/250x380/000/fff.jpg';
    return `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  }

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="details" style={{backgroundImage: `url(${checkBackground(data)})`}}>
      <div className="container">
        <div className="details__info">
          <img className="details__poster" src={checkPost(data)} alt={data.title}/>
          <div className="details__movie">
            <h1>{data.title}</h1>
            <div className="details__genres">{data.genres.map((genre) => <h3 className="genre" key={genre.name}>{genre.name}</h3>)}</div>
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
