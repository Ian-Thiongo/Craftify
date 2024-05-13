import React, { useState } from 'react';
import './SearchBar.css'; 


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');


  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value.trim()); // Trigger search on every character change
  };

  

  function handleSubmit (event){
    event.preventDefault();
    onSearch(query.trim()); 
  };

  return (
    <form className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      
    </form>
  );
}

export default SearchBar;
