import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import RegularHeartIcon from "../assets/heart-regular.svg?react";
import SolidHeartIcon from "../assets/heart-solid.svg?react";
import "../styles/HeartIcon.css";

const HeartIcon = ({ id }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.includes(id);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div onClick={handleClick} className="heart-icon-container">
      {isFavorite ? (
        <SolidHeartIcon
          className="heart-icon favorite"
          style={{ color: "red" }}
        />
      ) : (
        <RegularHeartIcon
          className="heart-icon not-favorite"
          style={{ color: "gray" }}
        />
      )}
    </div>
  );
};

export default HeartIcon;
