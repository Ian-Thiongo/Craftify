

import React, { useState } from 'react';
import NavFooter from './components/Nav-Footer';
import SearchBar from './SearchBar'
import Products from "./db.json";
import "./components/productlisting.css";


function App() {

  const [filteredProducts, setFilteredProducts] = useState(Products);

  
  const handleSearch = (query) => {
    const filtered = Products.filter(product => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.artist.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  };
  return (
    <>
       <NavFooter />
    <SearchBar onSearch={handleSearch}/>
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
        : (
          <p>No products found for your search.</p> 
  
      </div>
      
    </>

  );
}

export default App;

