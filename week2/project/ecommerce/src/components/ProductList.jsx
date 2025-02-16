import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";

export default function ProductList({ products }) {
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
          </div>
        </Link>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
