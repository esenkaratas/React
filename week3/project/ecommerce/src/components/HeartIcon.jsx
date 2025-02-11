// src/components/HeartIcon.jsx
import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";

const Heart = ({ id }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();
  const isFavourited = favourites.includes(id);

  return (
    <div
      onClick={() =>
        isFavourited ? removeFromFavourites(id) : addToFavourites(id)
      }
      style={{ cursor: "pointer" }}
    >
      <HeartIcon style={{ fill: isFavourited ? "red" : "gray" }} />
    </div>
  );
};

export default Heart;
