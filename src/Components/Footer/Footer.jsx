import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer>
      <div className="footer__links">
        <ul>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">System Status</a></li>
        </ul>
        <ul>
          <li><a href="#">Guidelines</a></li>
          <li><a href="#">Discussions</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </div>
      <div className="god">by Denys Lobanov</div>
    </footer>
  );
}

export default Footer;
