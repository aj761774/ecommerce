import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsListingPage from "./pages/ProductsListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsListingPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
