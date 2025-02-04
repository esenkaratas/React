import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FilteredCategories from "./components/FilteredCategories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load categories.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const url =
      activeCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${activeCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [activeCategory]);

  return (
    <Router>
      <Header />
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilteredCategories
                  allCategories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <ProductList products={products} />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </Router>
  );
}
