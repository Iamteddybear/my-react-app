import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import "./App.css";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/Computerparts')
      .then(res => res.json())
      .then(res => setItems(res));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(prevCart => prevCart.filter((p) => p.id !== product.id));
  };

  const location = useLocation();
  const category = location.pathname.slice(1);

  let products = items;

  if (category === "Keyboards") {
    products = items.filter((product) => product.category === "Keyboards");
  } else if (category === "Headsets") {
    products = items.filter((product) => product.category === "Headsets");
  } else if (category === "Chairs") {
    products = items.filter((product) => product.category === "Chairs");
  } else if (category === "Mouse") {
    products = items.filter((product) => product.category === "Mouse");
  }

  return (
    <div className="App">
      <Header removeFromCart={removeFromCart} />
      <Navbar cart={cart} setShowCart={setShowCart} removeFromCart={removeFromCart} />
      {category === "Keyboards" || category === "Headsets" || category === "Chairs" || category === "Mouse" ? (
        <ProductList
          products={products}
          addToCart={addToCart}
          category={category}
        />
      ) : (
        <ProductList
          products={items}
          addToCart={addToCart}
          category={category}
        />
      )}
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
