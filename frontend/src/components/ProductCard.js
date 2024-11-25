import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-gray-600">Price: {product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
