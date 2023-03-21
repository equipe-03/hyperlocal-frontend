import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./PAGES/category/category";
import "./index.css";
import ItensCategory from "./PAGES/itens-category/itens-category";
import FoodCard from "./PAGES/product-detail/product-detail";
import App from "./PAGES/product-detail/product-detail";
import RestaurantTable from "./COMPONENTS/table/table";
import Teste from "./COMPONENTS/table/teste";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/categorys" element={<Category />} />
        <Route path="/itens" element={<ItensCategory />} />
        <Route path="/product" element={<App />} />
        <Route path="/table" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
