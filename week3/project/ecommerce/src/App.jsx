import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> | <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
