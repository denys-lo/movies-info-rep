import React from 'react';
import './TopMovies.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, useParams} from "react-router-dom";
import useGetMovies from "../../../hooks/useGetMovies";
import {settings} from "../../../scripts/ReactSlick/ReactSlick";

function TopMovies(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovies('https://api.themoviedb.org/3/trending/movie/week?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef');

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="topmovies" id="top">
      <h3 className="topmovies__title">Top of the week:</h3>
      <div className="your-class topmovies__info">
        <Slider {...settings}>
        {data.map((movie) => <div className="topmovies__item"
                                  onMouseEnter={() => {document.querySelector(`.id${movie.id}`).style.display = 'block'}}
                                  onMouseLeave={() => {document.querySelector(`.id${movie.id}`).style.display = 'none'}}
                                  key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img className="item__poster" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
          </Link>
          <Link to={`/movie/${movie.id}`} className={"item__info " + "id" + movie.id}>
            {movie.title}
            <span>Average score: {movie.vote_average}</span>
          </Link>
        </div>)}
          </Slider>
      </div>
    </div>
  );
}

export default TopMovies;
