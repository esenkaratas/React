import React, { useEffect, useState } from "react";
import FilteredCategories from "../components/FilteredCategories";
import ProductList from "../components/ProductList";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(() => setError("Failed to load categories."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = "https://fakestoreapi.com/products";
    if (activeCategory !== "all") {
      url = `https://fakestoreapi.com/products/category/${activeCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch(() => setError("Failed to load products."))
      .finally(() => setLoading(false));
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  return (
    <div className="products-page">
      <FilteredCategories
        allCategories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {loading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}

      <ProductList products={products} />
    </div>
  );
};

export default Products;
