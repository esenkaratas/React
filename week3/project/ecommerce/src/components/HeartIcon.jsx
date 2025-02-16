import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import heartIcon from "../assets/heart-regular.svg"; // Import SVG as URL

const Heart = ({ id }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.includes(id);

  return (
    <div
      onClick={() =>
        isFavorite ? removeFromFavorites(id) : addToFavorites(id)
      }
      style={{ cursor: "pointer" }}
    >
      <img
        src={heartIcon}
        alt="Heart Icon"
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </div>
  );
};

export default Heart;
