import React  from "react";
import "./SearchFilms.css";
import FilmCard from "../FilmCard/FilmCard";

function SearchFilms({ searchFilm,handleToggleSearch}) {
  if (searchFilm.length === 0) {
    return null;
  }
  return (
    <div className="SearchFilmContainer">
      <p className="searchFilmTitle">Filmler</p>
      <div className="searchFilms">
        {searchFilm && searchFilm.length > 0
          ? searchFilm.map((film) => <FilmCard movie={film} handleToggleSearch={handleToggleSearch} />)
          : null}
      </div>
    </div>
  );
}

export default SearchFilms;
