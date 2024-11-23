import React from "react";
import "./style.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h2 className="product-name">{product.title}</h2>
    <p className="product-price">${product.price}</p>
  </div>
);

export default ProductCard;
