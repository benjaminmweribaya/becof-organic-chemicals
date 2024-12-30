import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.images[activeImageIndex]}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="flex space-x-2 mt-2">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} view ${index + 1}`}
            className={`w-12 h-12 object-cover cursor-pointer rounded ${activeImageIndex === index ? 'border-2 border-green-700' : ''
              }`}
            onClick={() => setActiveImageIndex(index)}
          />
        ))}
      </div>
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-gray-600">Price: {product.price} KES</p>
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
