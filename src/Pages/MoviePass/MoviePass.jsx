import React, { useContext } from "react";
import "./MoviePass.css";
import MoviePassHeader from "../../Companent/MoviePassHeader/MoviePassHeader";
import MoviePassCards from "../../Companent/MoviePassCards/MoviePassCards";
import MobileReklam from "../../Companent/MobileReklam/MobileReklam";
import CgvKullanim from "../../Companent/CgvKullanim/CgvKullanim";
import CgvFag from "../../Companent/CgvFag/CgvFag";
import { GlobalContext } from "../../Context";

function MoviePass() {
  const {cgvPassFag}=useContext(GlobalContext)
  return (
    <>
      <div className="moviePassBg">
        <div className="moviePassHeaderContainer">
          <MoviePassHeader />
        </div>
        <div className="moviePassContext container">
          <MoviePassCards />
        </div>
      </div>
      <div className="cgvMovieKullanBg">
        <div className="cgvMovieKullan container">
          <CgvKullanim />
        </div>
      </div>
      <div className="cgvFagBg">
        <div className="cgvFag container">
          <CgvFag fag={cgvPassFag} max={4} />
        </div>
      </div>
      <div className="cgvReklamBg">
        <div className="cgvReklam container">
          <MobileReklam  />
        </div>
      </div>
    </>
  );
}

export default MoviePass;
