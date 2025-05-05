import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-green-700">Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border-b py-2 flex justify-between items-center"
              >
                <span>{item.name}</span>
                <span>KES {item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-bold text-lg">
              Total: KES {total.toLocaleString()}
            </p>
            <button className="bg-green-700 text-white px-6 py-2 rounded mt-2 hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
