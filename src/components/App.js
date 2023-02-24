import logo from '../logo.svg';
import '../styles/App.css';
import React, {Component} from 'react';
import ProductListPage from './ProductListPage';
import { Route, useNavigate, Link, Routes } from "react-router-dom";
import AddProduct from './AddProduct';
import Home from './Home';

export default function App () {

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductListPage />} />
        {/*Add prompt that successful addition of product. Clear form when product is successfully added. Add prompt when addition
        of product fails. Add edit of quantity for product */}
      </Routes>
    </div>
  );
}


