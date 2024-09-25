import React, { useContext } from "react";
import "./PopularFilms.css";
import { GlobalContext } from "../../Context";
import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";

function PopularFilms({ handleToggleSearch }) {
  const { movieData } = useContext(GlobalContext);
  console.log(movieData);

  if (movieData.length === 0) {
    return <Loading />;
  }

  return (
    <div className="popularFilmsContainer">
      <p className="popularTitle">Popüler Filmler</p>
      <div className="popularFilms">
        {movieData.slice(0, 10).map((movie) => (
          <FilmCard key={movie.id} movie={movie} handleToggleSearch={handleToggleSearch} />
        ))}
      </div>
    </div>
  );
}

export default PopularFilms;
