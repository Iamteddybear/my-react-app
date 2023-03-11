import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;