import React  from 'react';
import Product1 from './images/product1.jpg';
import Product2 from './images/product2.jpg';
import Product3 from './images/product3.jpg';
import Product4 from './images/product4.jpg';
import Product5 from './images/product5.jpg';
import Product6 from './images/product6.jpg';
import Product7 from './images/product7.jpg';
import Product8 from './images/product8.jpg';


const products = [
  { id: 1, name: 'Product 1', price: 10, image: Product1 },
  { id: 2, name: 'Product 2', price: 15, image: Product2 },
  { id: 3, name: 'Product 3', price: 20, image: Product3 },
  { id: 4, name: 'Product 3', price: 50, image: Product4 },
  { id: 5, name: 'Product 3', price: 100, image: Product5 },
  { id: 6, name: 'Product 3', price: 150, image: Product6 },
  { id: 7, name: 'Product 3', price: 200, image: Product7 },
  { id: 8, name: 'Product 3', price: 210, image: Product8 },
  // Add more products here...
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <img src={product.image} alt={product.name} className="my-2" />
          <p className="font-bold">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
