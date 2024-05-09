
import React, { useState, useEffect } from 'react';
import './styles.css';

function NavFooter() {
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
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Contact Us</a></li>
          <li className="nav-item"><a href="#">Basket</a></li>
          <li className="nav-item"><a href="#">Log In</a></li>
        </ul>
      </nav>
      <footer className={`footer ${isVisible ? 'visible' : ''}`}>
        <div className="footer-content">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default NavFooter;

