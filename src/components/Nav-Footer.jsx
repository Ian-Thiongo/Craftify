// Nav-Footer.js

import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Basket</a></li>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Contact Us</a></li>
        <li className="nav-item"><a href="#">Sign In/Log In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

