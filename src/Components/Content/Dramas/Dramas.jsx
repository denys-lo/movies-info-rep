import React from 'react';
import {Link, useParams} from "react-router-dom";
import useSWR from "swr";
import Slider from "react-slick";
import './Dramas.css';
import useGetMovies from "../../../hooks/useGetMovies";
import {settings} from "../../../scripts/ReactSlick/ReactSlick";

function Dramas(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovies('https://api.themoviedb.org/3/discover/movie?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US&sort_by=popularity.desc&page=1&with_genres=18');

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="dramas" id="dramas">
      <h3 className="dramas__title">Dramas:</h3>
      <div className="your-class dramas__info">
        <Slider {...settings}>
          {data.map((movie) => <div className="dramas__item" key={movie.id}
                                    onMouseEnter={() => {document.querySelector(`.dramas${movie.id}`).style.display = 'block'}}
                                    onMouseLeave={() => {document.querySelector(`.dramas${movie.id}`).style.display = 'none'}}>
            <Link to={`/movie/${movie.id}`}>
              <img className="item__poster" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
            </Link>
            <Link to={`/movie/${movie.id}`} className={"item__info " + "dramas" + movie.id}>
              {movie.title}
              <span>Average score: {movie.vote_average}</span>
            </Link>
          </div>)}
        </Slider>
      </div>
    </div>
  );
}

export default Dramas;
