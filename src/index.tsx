import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./PAGES/category/category";
import "./index.css";
import ItensCategory from "./PAGES/itens-category/itens-category";
import Order from "./PAGES/order/order";
import Teste from "./COMPONENTS/table/teste";
import GlobalContext from "./context";
import ProductDetail from "./PAGES/product-detail/product-detail";
import Side from "./COMPONENTS/sidebar/sidebar";
import { Confirmation } from "./PAGES/confirmation/confirmation";
import { Test4 } from "./PAGES/teste/teste";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalContext>
    <BrowserRouter>
      <Routes>
        <Route path="/categorys" element={< Category />} />
        <Route path="/itens" element={< ItensCategory />} />
        <Route path="/table" element={< Teste />} />
        <Route path="/categorys" element={< Category />} />
        <Route path="/itens-category" element={< ItensCategory />} />
        <Route path="/order" element={< Order />} />
        <Route path="/product" element={< ProductDetail />} />
        <Route path="/side" element={< Side />} />
        <Route path="/confirmation" element={< Confirmation />} />
        <Route path="/teste" element={< Test4 />} />
      </Routes>
    </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>
);
