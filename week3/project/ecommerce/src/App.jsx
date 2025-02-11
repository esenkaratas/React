// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import Favourites from "./pages/Favourites";
import { FavouritesProvider } from "./context/FavouritesContext";

function App() {
  return (
    <FavouritesProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
