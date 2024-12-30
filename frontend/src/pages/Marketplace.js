import React, { useState, useEffect } from 'react';
import { getMarketplaceProducts } from '../utils/api';
import Cart from '../components/Cart'; // Component for managing cart
import ProductCard from '../components/ProductCard'; // Separate product card component

const products = [
  {
    id: 1,
    name: 'Becof HomeGuard 1Litre',
    price: 2000,
    description: 'Eco-friendly pesticide for home use.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_000147_k5idwe.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_001221_mu0vmn.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_001359_bvg6jv.png',
    ],
  },
  {
    id: 2,
    name: 'Becof HomeGuard 500ml',
    price: 1000,
    description: 'Eco-friendly pesticide for small-scale use.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325285/Photoroom-20240929_002039_10_syjqvk.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325286/Photoroom-20240929_002040_11_uhsxrx.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325286/Photoroom-20240929_002040_12_x9awrm.png',
    ],
  },
  {
    id: 3,
    name: 'Becof HomeGuard 250ml',
    price: 500,
    description: 'Eco-friendly pesticide for minimal usage.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325284/Photoroom-20240929_002040_13_dqlwgg.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325285/Photoroom-20240929_002041_14_kmdnkj.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325284/Photoroom-20240929_002041_15_pviejn.png',
    ],
  },
];

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getMarketplaceProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Add to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700">Marketplace</h1>
      <p className="text-gray-600">Browse and buy eco-friendly products.</p>

      {/* Search Bar */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded shadow"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Cart Section */}
      <Cart cart={cart} />
    </div>
  );
}

export default Marketplace;
