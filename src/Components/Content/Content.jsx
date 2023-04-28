import React from 'react';
import TopMovies from "./TopMovies";
import Comedies from "./Comedies";
import Dramas from "./Dramas";
import Actions from "./Actions";
import './Content.css';

function Content(props) {
  return (
    <div className="content">
      <div className="container">
        <TopMovies/>
        <Comedies/>
        <Dramas/>
        <Actions/>
      </div>
    </div>
  );
}

export default Content;
