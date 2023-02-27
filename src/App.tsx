import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout/layout";
import Hero from "./components/hero/hero";
import Home from "./pages/home";
import Products from "./pages/products/products";
import NotFound from "./pages/notfound/notfound";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:product" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
