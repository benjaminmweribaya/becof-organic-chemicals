import React, { useState, useEffect } from 'react';
import { getMarketplaceProducts } from '../utils/api';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCard';

const staticProducts = [
  {
    id: 0,
    name: 'Becof AgroShield 250ml',
    price: 500,
    description: 'Agriculture Plant-Based Insecticide. It is safe, effective, and environmentally friendly. Best for Vegetables.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325286/Photoroom-20240929_002039_8_l6a3r4.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325287/Photoroom-20240929_002038_7_c2cpo6.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325288/Photoroom-20240929_002039_9_qby5mz.png',
    ],
  },
  {
    id: 1,
    name: 'Becof AgroShield 1L',
    price: 2000,
    description: 'Agriculture Plant-Based Insecticide. It is safe, effective, and environmentally friendly. Best for Vegetables.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325292/Photoroom-20240929_001457_jqc1zj.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325289/Photoroom-20240929_002036_2_gijscs.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325293/Photoroom-20240929_002036_1_kgcx51.png',
    ],
  },
  {
    id: 2,
    name: 'Becof AgroShield 500ml',
    price: 1000,
    description: 'Agriculture Plant-Based Insecticide. It is safe, effective, and environmentally friendly. Best for Vegetables.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325291/Photoroom-20240929_002037_3_zm1u1p.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325289/Photoroom-20240929_002037_5_ovvaml.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325292/Photoroom-20240929_002037_4_rfomir.png',
    ],
  },
  {
    id: 3,
    name: 'Becof HomeGuard 1L',
    price: 2000,
    description: 'Domestic Plant-Based Insecticide. It is safe, effective, and environmentally friendly.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_000147_k5idwe.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_001221_mu0vmn.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325294/Photoroom-20240929_001359_bvg6jv.png',
    ],
  },
  {
    id: 4,
    name: 'Becof HomeGuard 500ml',
    price: 1000,
    description: 'Domestic Plant-Based Insecticide. It is safe, effective, and environmentally friendly.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325285/Photoroom-20240929_002039_10_syjqvk.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325286/Photoroom-20240929_002040_11_uhsxrx.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325286/Photoroom-20240929_002040_12_x9awrm.png',
    ],
  },
  {
    id: 5,
    name: 'Becof HomeGuard 250ml',
    price: 500,
    description: 'Domestic Plant-Based Insecticide. It is safe, effective, and environmentally friendly.',
    images: [
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325284/Photoroom-20240929_002040_13_dqlwgg.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325285/Photoroom-20240929_002041_14_kmdnkj.png',
      'https://res.cloudinary.com/ddjrmxirc/image/upload/v1735325284/Photoroom-20240929_002041_15_pviejn.png',
    ],
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getMarketplaceProducts();
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts(staticProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(staticProducts);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700">Products</h1>
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">No products found.</p>
        )}
      </div>

      {/* Cart Section */}
      <Cart cart={cart} />
    </div>
  );
}

export default Products;


