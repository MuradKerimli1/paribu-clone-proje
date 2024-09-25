import React from "react";
import "./MovieBrand.css";

function MovieBrand({ Brand }) {
  return (
    <div className="movieBrand">
      <img src="/Images/home.svg" alt="moviehome" loading="lazy" />
      <img src="/Images/arrow-right.svg" alt="moviehome" loading="lazy" />
      <span>{Brand}</span>
    </div>
  );
}

export default MovieBrand;
