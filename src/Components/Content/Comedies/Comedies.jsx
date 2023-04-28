import React from 'react';
import {Link, useParams} from "react-router-dom";
import useSWR from "swr";
import Slider from "react-slick";
import './Comedies.css';
import useGetMovies from "../../../hooks/useGetMovies";
import {settings} from "../../../scripts/ReactSlick/ReactSlick";

function Comedies(props) {
  const {id} = useParams();
  const {data, isLoading, error} = useGetMovies('https://api.themoviedb.org/3/discover/movie?api_key=c41ad62b4ea4d13703e4c79ef2e0c5ef&language=en-US&sort_by=popularity.desc&page=1&with_genres=35');

  if (error) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="comedies" id="comedies">
      <h3 className="comedies__title">Comedies:</h3>
      <div className="your-class comedies__info">
        <Slider {...settings}>
          {data.map((movie) => <div className="comedies__item" key={movie.id}
                                    onMouseEnter={() => {document.querySelector(`.comedies${movie.id}`).style.display = 'block'}}
                                    onMouseLeave={() => {document.querySelector(`.comedies${movie.id}`).style.display = 'none'}}>
            <Link to={`/movie/${movie.id}`}>
              <img className="item__poster" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>
            </Link>
            <Link to={`/movie/${movie.id}`} className={"item__info " + "comedies" + movie.id}>
              {movie.title}
              <span>Average score: {movie.vote_average}</span>
            </Link>
          </div>)}
        </Slider>
      </div>
    </div>
  );
}

export default Comedies;
