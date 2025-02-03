import PropTypes from "prop-types";

export default function ProductItem({ product }) {
  return (
    <li className="product--item">
      <img src={product.image} alt={product.title} className="product--image" />
      <div className="product--title">{product.title}</div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
