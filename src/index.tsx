import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./PAGES/category/category";
import "./index.css";
import ItensCategory from "./PAGES/itens-category/itens-category";
import Order from "./PAGES/order/order";
import App from "./PAGES/product-detail/product-detail";
import Teste from "./COMPONENTS/table/teste";
import GlobalContext from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/categorys" element={<Category />} />
          <Route path="/itens" element={<ItensCategory />} />
          <Route path="/product" element={<App />} />
          <Route path="/table" element={<Teste />} />
          <Route path="/itens-category" element={<ItensCategory />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>
);
