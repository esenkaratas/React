import PropTypes from "prop-types";

export default function FilteredCategories({
  allCategories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="category-container">
      {allCategories.map((category, index) => (
        <button
          key={index}
          className={
            activeCategory === category ? "active-category" : "category-button"
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
    </section>
  );
}

FilteredCategories.propTypes = {
  allCategories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};
