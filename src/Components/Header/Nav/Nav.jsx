import React from 'react';
import './Nav.css';
import { HashLink as Link } from 'react-router-hash-link';

function Nav(props) {
  return (
    <ul className="nav">
      <li><Link to='/#main'>Main</Link></li>
      <li><Link to='/#top'>Top</Link></li>
      <li><Link to='/#comedies'>Comedies</Link></li>
      <li><Link to='/#dramas'>Dramas</Link></li>
      <li><Link to='/#actions'>Actions</Link></li>
    </ul>
  );
}

export default Nav;
