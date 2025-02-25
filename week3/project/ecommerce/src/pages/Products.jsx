import React, { useState, useEffect } from "react";
import FilteredCategories from "../components/FilteredCategories";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch("https://fakestoreapi.com/products/categories");

  let url = "https://fakestoreapi.com/products";
  if (activeCategory !== "all") {
    url = `https://fakestoreapi.com/products/category/${activeCategory}`;
  }
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch(url);

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

      {(categoriesLoading || productsLoading) && <p>Loading products...</p>}
      {(categoriesError || productsError) && (
        <p className="error-message">{categoriesError || productsError}</p>
      )}

      <ProductList products={products} />
    </div>
  );
};

export default Products;
