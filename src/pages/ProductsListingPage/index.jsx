import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

const ProductsListingPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
        );
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchProducts();
  }, [page]);

  return (
    <div>
      {
          isLoading
          ?
          <div className="products-loader">Loading...</div>
          :
          <>
          <h1 className="products-title">Products</h1>
          <div className="products-container">
           {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} setPage={setPage} />
          </>
      }
    </div>
  );
};

export default ProductsListingPage;
