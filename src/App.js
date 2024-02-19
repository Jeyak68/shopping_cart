import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Online Store</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <ProductList addToCart={addToCart} />
        </div>
        <div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
