import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./PAGES/category/category";
import { Confirmation } from "./PAGES/confirmation/confirmation";
import ItensCategory from "./PAGES/itens-category/itens-category";
import Order from "./PAGES/order/order";
import GlobalContext from "./context";
import ProductDetail from "./PAGES/product-detail/product-detail";
import Side from "./COMPONENTS/sidebar/sidebar";
import { Confirmation } from "./PAGES/confirmation/confirmation";
import Home from "./PAGES/home/home";
import CreateCategory from "./COMPONENTS/create-form-category/create-form-category";
import "./index.css";
import { AdminHome } from "./PAGES/admin-home/admin-home";
import { AdminIngredient } from "./PAGES/admin-ingredient/admin-ingredient";
import { AdminCategory } from "./PAGES/admin-category/admin-category";
import { AdminPratos } from "./PAGES/admin-pratos/admin-pratos";
import { AdminMesas } from "./PAGES/admin-mesa/admin-mesa";
import { AdminUsers } from "./PAGES/admin-user/admin-user";
import { CreateDish } from "./COMPONENTS/crud-dish/createdish";
import { CreateIngredient } from "./COMPONENTS/crud-ingredient/createingredient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/categorys/" element={<Category />} />
          <Route path="/itens" element={<ItensCategory />} />
          <Route path="/categorys" element={<Category />} />
          <Route path="/itens-category/:id" element={<ItensCategory />} />
          <Route path="/category/create" element={<CreateCategory />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/side" element={<Side />} />
          <Route path="/confirmation" element={<Confirmation />} />


          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminIngredient" element={<AdminIngredient />} />
          <Route path="/adminCategory" element={<AdminCategory />} />
          <Route path="/adminDish" element={<AdminPratos />} />
          <Route path="/adminMesas" element={<AdminMesas />} />
          <Route path="/adminUsers" element={<AdminUsers />} />
          <Route path="/createdish/" element={<CreateDish />} />
          <Route path="/createingredient" element={<CreateIngredient />} />

        </Routes>
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>
);
