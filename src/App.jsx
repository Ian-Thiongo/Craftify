
import React,{ useState } from 'react';
import NavFooter from './components/Nav-Footer';
import Products from "./db.json";
import "./components/productlisting.css";
import Form from './components/Form'


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLoginForm(false); // Close the login form after successful login
  };

  const handleLoginLinkClick = () => {
    console.log("Login link clicked")
    setShowLoginForm(true);
    console.log("showLoginForm:", showLoginForm);
  };

  return (
    <>
      <div className="product-grid"> {/* Container for grid layout */}
        {Products.map((product) => (
          <div className="product-card" key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <h3>{product.artist}</h3>
            <p>{product.description}</p> {/* Use <p> for longer descriptions */}
            <img src={product.image} alt={product.name} />
          
          </div>
        ))}

           
      {showLoginForm && <Form onLogin={handleLogin} />}

  <NavFooter
  onLoginClick={handleLoginLinkClick} 
  loggedIn={loggedIn}  />
       
      </div>
      
    </>

  );
}

export default App;





