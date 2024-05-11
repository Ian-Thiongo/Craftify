
import React, { useState } from 'react';
import NavFooter from './components/Nav-Footer';
import Products from "./db.json";
import "./components/productlisting.css";
import SearchBar from './SearchBar'
import "./components/BuyButton.css"
import Logo from './components/Logo'
import SellersForm from "./components/SellersForm"
import Form from './components/Form'

function App() {

  const [products, setProducts] = useState(Products); // State for fetched and user-added products
  const [query,setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const handleSearch = (query) => {
    const filteredProducts = Products.filter((product) => {
      const lowerQuery = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.artist.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredProducts(filteredProducts);
  };


  const [cart, setCart] = useState([]);
   const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updateCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updateCart);
    } else{
      setCart([...cart, {...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };


 
 const handleAddProduct = (newProduct) => {
  setProducts([...products,newProduct]);
};

  
  
    const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (username) => {
    setLoggedIn(true);
    setShowLoginForm(false); // Close the login form after successful login
  };

  const handleLoginLinkClick = () => {
    console.log("Login link clicked")
    setShowLoginForm(true);
    console.log("showLoginForm:", showLoginForm);
  };

    

  const onLogin = (username) => {
    console.log(`Logging in as ${username}`);
  };
  

  return (


<div>
  <NavFooter />
  <SearchBar onSearch={handleSearch}/> 
  <Logo/>
  <div className="product-grid"> {/* Container for grid layout */}
  {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
      <div className="product-card" key={product.id}>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h3>{product.artist}</h3>
        <p>{product.description}</p> 
        <img src={product.image} alt={product.name} />
        <button className='buy-button' onClick={() => addToCart(product)}>Buy</button>
     
       
      </div>
    ))
    ):(<p></p>)}
    

      
      <SellersForm onAddProduct={handleAddProduct} /> 


     
       
      {showLoginForm && <Form onLogin={handleLogin} />}

  <NavFooter
  onLoginClick={handleLoginLinkClick} 
  loggedIn={loggedIn}  />
       
       
  <div className="basket">
    <h2>Basket</h2>
    {cart.map((item, index) => (
      <div key={index}>
        <p>{item.name} - ${item.price} - Quantity: {item.quantity}</p>
        <button className='increase-button' onClick={() => increaseQuantity(item.id)}>+1</button>
        <button className='decrease-button' onClick={() => decreaseQuantity(item.id)}>-1</button>
        <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>


      </div>

      
    

    ))}
  </div>
  
   </div>
   

  </div>
  )}

export default App