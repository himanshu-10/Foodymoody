import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import FoodPage from "./Pages/Food/FoodPage";
import CartPage from "./Pages/Cart/CartPage";
import LoginPage from "./Pages/Login/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  );
}

// localhost:3000/search/meat
