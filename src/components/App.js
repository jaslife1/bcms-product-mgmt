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

  return (
    <div>
      {/* <ProductListPage /> */}
      <button
        onClick={addNewProduct}
      >
        Add New Product
      </button>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </div>
  );
}


