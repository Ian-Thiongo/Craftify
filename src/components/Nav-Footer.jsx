// Nav-Footer.js

import React from 'react';
import './styles.css';

function NavFooter(){
  return (
    <div>
      
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Collections</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Contact Us</a></li>
        <li className="nav-item"><a href="#">Basket</a></li>
        <li className="nav-item"><a href="#">Log In</a></li>
      </ul>
    </nav>
    <footer className="footer">
        <div className="footer-content">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
     </div>
  );
}

export default NavFooter;

