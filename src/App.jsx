
import React, { useState } from 'react';
import NavFooter from './components/Nav-Footer';
import Products from "./db.json";
import "./components/productlisting.css";
import SearchBar from './SearchBar'
import "./components/BuyButton.css"
import Logo from './components/Logo'
import SellersForm from "./components/SellersForm"


function App() {

  const [products, setProducts] = useState(Products); // State for fetched and user-added products
  

  
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


  return (

    <>
      <NavFooter />
      <SearchBar/> 
      <Logo/>
      
      <div className="product-grid"> {/* Container for grid layout */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <h3>{product.artist}</h3>
            <h3>{product.description}</h3> 
            <img src={product.image} alt={product.name} />
            <button className='buy-button' onClick={() => addToCart(product)}>Buy</button>

          </div>
        ))}
      </div>
      
      <SellersForm onAddProduct={handleAddProduct} /> 


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
      
    </>
  );
}

export default App;


