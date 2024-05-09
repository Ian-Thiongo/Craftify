
// import React, { useState, useEffect } from 'react';
// import './styles.css';

// function NavFooter() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const scrollPosition = window.scrollY;
//       const documentHeight = document.body.offsetHeight;

//       // Calculate whether the user has scrolled to the bottom
//       if (windowHeight + scrollPosition >= documentHeight) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <nav className="navbar">
//         <ul className="nav-list">
//           <li className="nav-item"><a href="#">Collections</a></li>
//           <li className="nav-item"><a href="#">About</a></li>
//           <li className="nav-item"><a href="#">Contact Us</a></li>
//           <li className="nav-item"><a href="#">Basket</a></li>
//           <li className="nav-item"><a href="#">Log In</a></li>
//         </ul>
//       </nav>
//       <footer className={`footer ${isVisible ? 'visible' : ''}`}>
//         <div className="footer-content">
//           <a href="#">About Us</a>
//           <a href="#">Contact Us</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default NavFooter;

import React, { useState } from 'react';
import './styles.css';

function NavFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleItemClick = (tab) => {
    setIsVisible(true);
    setActiveTab(tab);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" onClick={() => handleItemClick('collections')}>Collections</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleItemClick('about')}>About</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleItemClick('contact')}>Contact Us</a></li>
          <li className="nav-item"><a href="#" onClick={() => handleItemClick('basket')}>Basket</a></li>
          <li className="nav-item"><a href="#">Log In</a></li>
        </ul>
      </nav>
      {isVisible && (
        <footer className="footer">
          <div className="footer-content">
            {activeTab === 'about' && <AboutComponent />}
            {activeTab === 'contact' && <ContactComponent />}
            {activeTab === 'basket' && <BasketComponent />}
          </div>
        </footer>
      )}
    </div>
  );
}

function AboutComponent() {
  return (
    <div>
      <h2>About Us</h2>
      <p>

"At our company, we blend creativity with innovation to inspire and engage audiences worldwide. From captivating performances to immersive exhibitions, we explore the limitless possibilities of artistic expression. Our work spans across various disciplines including visual arts, performing arts, and digital media. With a commitment to excellence, we collaborate with artists and creators to bring unique visions to life. Join us on a journey where imagination knows no bounds."

Feel free to adjust the language and details to better fit the specific focus and ethos of your arts company..
</p>
<p>..........</p>
    </div>
  );
}

function ContactComponent() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone number 0728938156</p>
      <p>Email Us on woodcrafter@gmai.com</p>
      <p>.........</p>
    </div>
  );
}

function BasketComponent() {
  return (
    <div>
      <h2>Basket</h2>
      <p>Your shopping basket content.</p>
    </div>
  );
}

export default NavFooter;
