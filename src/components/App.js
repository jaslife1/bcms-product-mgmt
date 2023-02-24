import logo from '../logo.svg';
import '../styles/App.css';
import React from 'react';
import ProductListPage from './ProductListPage';
import { Route, Routes } from "react-router-dom";
import AddProduct from './AddProduct';
import AddStore from './AddStore';
import Home from './Home';

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/addstore" element={<AddStore />} />
        {/*Add edit of quantity for product */}
      </Routes>
    </div>
  );
}


