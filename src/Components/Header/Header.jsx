import React, {useState} from 'react';
import './Header.css';
import Nav from "./Nav";
import Search from "./Search";
import MovieOfTheDay from "./MovieOfTheDay/MovieOfTheDay";
import SearchPanel from "./Search/SearchPanel";

function Header(props) {
  const [title, setTitle] = useState('');
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__top">
          <a href="/" className="logo">🍿Movies-info🍿</a>
          <Nav/>
          <Search setTitle={setTitle}/>
        </div>
        <div className="container search_panel__container">
          <SearchPanel title={title} setTitle={setTitle}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
