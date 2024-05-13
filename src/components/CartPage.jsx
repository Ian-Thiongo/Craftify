import React from 'react';

const CartPage = ({ cart, decreaseQuantity, increaseQuantity, removeFromCart }) => {
  return (
    <div id="Cart">
      <h2>Cart</h2>
      {cart.map((item) => ( 
        <div key={item.id}>
          <p>{item.name} - ${item.price} - Quantity: {item.quantity}</p>
          <button className='increase-button' onClick={() => increaseQuantity(item.id)}>+1</button>
          <button className='decrease-button' onClick={() => decreaseQuantity(item.id)}>-1</button>
          <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;


