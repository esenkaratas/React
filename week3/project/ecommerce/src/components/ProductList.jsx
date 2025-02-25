import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";
import HeartIcon from "./HeartIcon";

export default function ProductList({ products = [] }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="product-link"
        >
          <div className="product--item">
            <img
              src={product.image}
              alt={product.title}
              className="product--image"
            />
            <h3 className="product--title">{product.title}</h3>
            <HeartIcon id={product.id} />
          </div>
        </Link>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};
