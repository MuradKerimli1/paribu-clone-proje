import React from "react";
import "./FilmCard.css";
import { useNavigate } from "react-router-dom";

function FilmCard({ movie, handleToggleSearch }) {
  const selected = useNavigate();
  function movieClick(movie) {
    handleToggleSearch();
    selected(`/selectedMovie/${movie.title}`);
  }
  return (
    <div className="filmCard" onClick={() => movieClick(movie)}>
      <div className="filmCardImg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="filmCard"
        />
      </div>
      <div className="filmCardtext">
        <p className="filmOriginalTitle">{movie.original_title}</p>
        <span className="filmSecondTitle">{movie.title}</span>
        <div className="filmDate">
          <img src="/Images/calendar.svg" alt="calendar" />
          <span>{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
