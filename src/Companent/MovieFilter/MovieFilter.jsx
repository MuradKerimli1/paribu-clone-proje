import React from "react";
import "./MovieFilter.css";

function MovieFilter({ selectedCategory, onCategoryChange, onSortChange }) {
  return (
    <div className="movieFilterContainer">
      <div className="movieCheck">
        <p
          className={`movieNameCheck ${
            selectedCategory === "Vizyonda" ? "active" : ""
          }`}
          onClick={() => onCategoryChange("Vizyonda")}
        >
          Vizyonda
        </p>
        <p
          className={`movieNameCheck ${
            selectedCategory === "Yakında Vizyonda" ? "active" : ""
          }`}
          onClick={() => onCategoryChange("Yakında Vizyonda")}
        >
          Yakında
        </p>
      </div>
      <div className="movieSort">
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="akilName">Akıllı Sıralama</option>
          <option value="popular">Popülerliğine Göre</option>
          <option value="puan">Puana Göre</option>
        </select>
      </div>
    </div>
  );
}

export default MovieFilter;
