import { useState } from "react";
import "./App.css";
import allCategories from "./fake-data/all-categories.js";
import products from "./fake-data/all-products.js";
import Header from "./components/header";
import FilteredCategories from "./components/FilteredCategories";
import ProductList from "./components/ProductList";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  function normalizeCategory(category) {
    return category.replace("FAKE: ", "").trim().toLowerCase();
  }

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (product) =>
            normalizeCategory(product.category) ===
            normalizeCategory(activeCategory)
        );

  return (
    <div>
      <Header />
      <main>
        <FilteredCategories
          allCategories={allCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}
