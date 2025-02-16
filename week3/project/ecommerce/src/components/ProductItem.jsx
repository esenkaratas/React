import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductItem({ product }) {
  return (
    <li className="product--item">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product--image"
        />
        <div className="product--title">{product.title}</div>
      </Link>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
