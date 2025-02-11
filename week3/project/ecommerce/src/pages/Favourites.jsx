// src/pages/Favourites.jsx
import React, { useEffect, useState } from "react";
import { useFavourites } from "../context/FavouritesContext";
import ProductList from "../components/ProductList";

const Favourites = () => {
  const { favourites } = useFavourites();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
      );
      setProducts(fetchedProducts);
      setLoading(false);
    };

    if (favourites.length > 0) {
      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [favourites]);

  if (loading) return <p>Loading favourites...</p>;

  return (
    <div>
      <h1>Favourites</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Favourites;
