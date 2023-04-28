import React from 'react';
import './Search.css';

function Search(props) {
  const handlerTitle = (event) => {
    event.preventDefault();
    props.setTitle(event.target.value);
    if (event.target.value === '') document.querySelector(`.search_panel__more`).style.display = 'none';
  }
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>Search</label>
      <input className="search" placeholder="🔎 Enter a movie title" type="text" onChange={handlerTitle}/>
    </form>
  );
}

export default Search;
