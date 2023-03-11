import React, { useState } from "react";
import Cart from "./Cart";

const Navbar = ({ cart, removeFromCart }) => {
  const [showCartState, setShowCartState] = useState(false);

  const closeModal = () => {
    setShowCartState(false);
  };

  const openModal = () => {
    setShowCartState(true);
  };

  return (
    <>
      <nav>
        <button onClick={openModal}>
          Cart ({cart.length})
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ marginRight: "10px" }} onClick={openModal}>
            View Cart ({cart.length})
          </button>
        </div>
      </nav>
      {showCartState && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close" onClick={closeModal}>
              X
            </button>
            <Cart cart={cart} removeFromCart={removeFromCart} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
