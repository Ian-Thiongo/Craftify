
import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavFooter({ loggedIn, onLoginClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.offsetHeight;

      // Calculate whether the user has scrolled to the bottom
      if (windowHeight + scrollPosition >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Collections</a></li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>

          {!loggedIn && (
            
              <li className="nav-item">
                <Link to="/login" >Log In</Link>
              </li>   
          )}
         <li>
         <a href="Cart">
         <FontAwesomeIcon icon={faShoppingCart} />
         </a>
  
         </li>
        </ul>
      </nav>
      <footer className={`footer ${isVisible ? 'visible' : ''}`}>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default NavFooter;
      


