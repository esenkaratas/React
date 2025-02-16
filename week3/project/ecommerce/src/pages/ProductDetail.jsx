import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Product ID from URL:", id);
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched product details:", JSON.stringify(data, null, 2));
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    console.log("Component re-rendered, current product state:", product);
  }, [product]);

  if (loading)
    return <p className="loading-message">Loading product details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!product || Object.keys(product).length === 0)
    return <p>No product details available.</p>;

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">
        <strong>Price:</strong> ${product.price}
      </p>
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
    </div>
  );
}
