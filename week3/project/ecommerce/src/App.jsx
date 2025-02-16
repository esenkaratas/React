import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> | <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* Simplified route */}
        <Route path="/favorites" element={<Favorites />} />
        {/* Simplified route */}
      </Routes>
    </Router>
  );
}

export default App;
