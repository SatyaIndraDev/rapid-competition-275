import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/ProductsData/Products";
import Homepage from "./Homepage";
import Singleproduct from "./Singleproduct";
import Cart from "./Cart";
import Signup from "./Signup";
import Login from "./Login";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
