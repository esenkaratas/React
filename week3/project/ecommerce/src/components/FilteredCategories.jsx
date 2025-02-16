import React from "react";
import PropTypes from "prop-types";
import "../styles/FilteredCategories.css";

export default function FilteredCategories({
  allCategories = [],
  activeCategory,
  setActiveCategory,
}) {
  if (!Array.isArray(allCategories) || allCategories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <section className="category-container">
      <h2 className="category-title">Products</h2>
      <div className="category-buttons">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={
              activeCategory === category
                ? "active-category"
                : "category-button"
            }
            onClick={() =>
              setActiveCategory((prevCategory) =>
                prevCategory === category ? "all" : category
              )
            }
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

FilteredCategories.propTypes = {
  allCategories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};
