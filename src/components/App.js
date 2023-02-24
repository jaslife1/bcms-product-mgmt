import logo from '../logo.svg';
import '../styles/App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import AddProduct from './Product/AddProduct';
import ProductListPage from './Product/ProductListPage';
import AddStore from './Store/AddStore';
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


