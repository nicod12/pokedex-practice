import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoImg} alt="pokeapi-logo" className="navbar-img" />
      </div>
      <div>{favoritePokemons.length}🧡</div>
    </nav>
  );
};

export default Navbar;
