import React, { useState } from 'react';
import NavFooter from './components/Nav-Footer';
import Products from "./db.json";
import "./components/productlisting.css";
import SearchBar from "./components/SearchBar"
import "./components/BuyButton.css"
import SellersForm from "./components/SellersForm"
import CartPage from "./components/CartPage" // Import CartPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState(Products); // State for fetched and user-added products
  const [cart, setCart] = useState([]);

  const handleSearch = (query) => {
    const filteredProducts = Products.filter((product) => {
      const lowerQuery = query.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowerQuery) ||
        product.artist.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      );
    });
    setProducts(filteredProducts);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updateCart = [...cart];
      updateCart[existingItemIndex].quantity += 1;
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
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

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };
  
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <NavFooter />
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
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
      <CartPage
        cart={cart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
