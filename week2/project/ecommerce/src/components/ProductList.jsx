import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <section className="product-container">
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
