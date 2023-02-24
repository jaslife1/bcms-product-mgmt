import logo from '../logo.svg';
import '../styles/App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import AddProduct from './Product/AddProduct';
import ProductListPage from './Product/ProductListPage';
import AddStore from './Store/AddStore';
import Home from './Home';
import StoreListPage from './Store/StoreListPage';
import AddNewEmployee from './Employee/AddNewEmployee';
import AddUser from './User/AddUser';

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/addstore" element={<AddStore />} />
        <Route path="/stores" element={<StoreListPage />} />
        <Route path="/addemployee" element={<AddNewEmployee />} />
        <Route path="/adduser" element={<AddUser />} />
        {/*Add edit of quantity for product */}
      </Routes>
    </div>
  );
}


