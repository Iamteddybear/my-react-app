import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products = [], addToCart, category }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      <div className="product-categories">
        <Link to="/keyboards">Keyboards</Link>
        <Link to="/headsets">Headsets</Link>
        <Link to="/chairs">Chairs</Link>
        <Link to="/mouse">Mouse</Link>
      </div>
      <div className="product-list">
        {products &&
          products
            .filter((product) => !category || product.category === category)
            .map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name} - ${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductList;
