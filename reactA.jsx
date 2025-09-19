import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// Reusable ProductCard Component
function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div className="app">
      <h2>Products List</h2>
      <div className="product-list">
        <ProductCard name="Wireless Mouse" price={25.99} inStock={true} />
        <ProductCard name="Keyboard" price={45.5} inStock={false} />
        <ProductCard name="Monitor" price={199.99} inStock={true} />
      </div>
    </div>
  );
}

export default App;
