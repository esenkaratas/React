import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductList from "../components/ProductList";

const Favorites = () => {
  console.log("Favorites component is rendering");
  const { favorites } = useFavorites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (favorites.length === 0) return;

    setLoading(true);
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          favorites.map((id) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
              res.json()
            )
          )
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [favorites]);

  if (loading) return <p>Loading favorites...</p>;

  return (
    <div>
      <h1>Favorites</h1>
      {products.length === 0 ? (
        <p>No favorites found.</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Favorites;
