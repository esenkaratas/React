import React, { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (id) => {
    setFavourites((prev) => [...prev, id]);
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
