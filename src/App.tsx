import "./App.css";
import React from "react";
import Main from "./pages/main/index";
import Product from "./pages/product/index";
import ProductEdit from "./pages/productEdit/index";
import Layout from "./component/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="product" element={<Product />} />
            <Route path="product/edit" element={<ProductEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
