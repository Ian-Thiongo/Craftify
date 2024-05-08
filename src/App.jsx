
import React from 'react';
import NavFooter from './components/Nav-Footer';
import Products from "./db.json";
import "./components/productlisting.css";
import SearchBar from './SearchBar';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <NavFooter />
      <SearchBar/> 
      <Logo/>
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
      </div>
    </>
  );
}

export default App;


