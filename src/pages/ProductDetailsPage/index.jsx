import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h1 className="product-name">{product.title}</h1>
      <div className="product-images">
        {product.images.map((img, index) => (
          <img key={index} loading="lazy" src={img} alt={`${product.title}-${index}`} />
        ))}
      </div>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductDetailsPage;
