import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b p-2">
          <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
          <p className="flex-1">{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 pl-4">Remove</button>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Total: ${totalAmount}</h3>
      </div>
    </div>
  );
};

export default Cart;
