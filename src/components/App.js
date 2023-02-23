import logo from '../logo.svg';
import '../styles/App.css';
import React, {Component} from 'react';
import ProductListPage from './ProductListPage';
import { Route, useNavigate, Link, Routes } from "react-router-dom";
import AddProduct from './AddProduct';

export default function App () {

  const navigate = useNavigate();

  const addNewProduct = () => {
    navigate("/addproduct")
  }

  const listProducts = () => {
    navigate("/products")
  }

  return (
    <div>
      {/* Add this to a navigation bar */}
      <button
        onClick={addNewProduct}
      >
        Add New Product
      </button>
      <button
        onClick={listProducts}
      >
        All Products
      </button>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductListPage />} />
        {/* Add list of products. Add prompt that successful addition of product. Clear form when product is successfully added. Add prompt when addition
        of product fails. Add edit of quantity for product */}
        {/* <Route path="/" element={()} /> */}
      </Routes>
    </div>
  );
}


