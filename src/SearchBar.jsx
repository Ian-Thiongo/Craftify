import React, { useState } from 'react';
import './SearchBar.css'; 


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  function handleSubmit (event){
    event.preventDefault();
    onSearch(query.trim()); 
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
