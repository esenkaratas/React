import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/ProductDetail.css";
import HeartIcon from "../components/HeartIcon";

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

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
      <HeartIcon id={product.id} />
    </div>
  );
}
