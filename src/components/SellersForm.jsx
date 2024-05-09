import React, { useState } from 'react';
import './sellersform.css';

function SellersForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct({ name, price, artist, description,image });
    setName('');
    setPrice('');
    setArtist ('');
    setDescription ('');
    setImage ('');
  };

  return (
    <div className='sellers-form-container'>
      <h1>SELL YOUR PRODUCTS</h1>
    <form onSubmit={handleSubmit} className = "product-form">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

    <label htmlFor="price">Price:</label>
    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

    <label htmlFor="artist">Artist:</label>
    <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)} required />

    <label htmlFor="description">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

    <label htmlFor="image">Image URL:</label>
    <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />

    <button type="submit">Add Product</button>
  </form>
  </div>
);
}

export default SellersForm;








































// import React,{useState} from 'react'
// import './sellersform.css'

// function SellersForm({ onAddProduct }) {
//     const [newProduct, setNewProduct] = useState({
//       image: "",
//       description: "",
//       category: "",
//       amount: "",
//     });
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       onAddProduct(newProduct);
//       setNewProduct({
//         image: "",
//         description: "",
//         price: "",
//         artist: "",
//       });
//     }
  
//     function handleChange(event) {
//       const key = event.target.id;
//       const value = event.target.value;
//       setNewProduct({ ...newProduct, [key]: value });
//     }
  
//     return (
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           id="image"
//           className="form-input"
//           placeholder='image-url'
//           value={newProduct.image}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="description"
//           className="form-input"
//           placeholder="Description"
//           value={newProduct.description}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           id="price"
//           className="form-input"
//           placeholder="Price in dollars"
//           value={newProduct.price}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="artist"
//           className="form-input"
//           placeholder="Artist"
//           value={newProduct.artist}
//           onChange={handleChange}
//         />
//         <input
//           type="submit"
//           value="Add Product"
//           className="form-input"
//         />
//       </form>
//     );
//   }

// export default SellersForm;