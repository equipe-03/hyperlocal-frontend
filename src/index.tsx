import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category } from './PAGES/category/category';
import './index.css'
import ItensCategory from './PAGES/itens-category/itens-category';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/categorys" element={< Category />} />
        <Route path='/itens' element={< ItensCategory />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);