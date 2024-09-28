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
        <div className="moviePassContext containerer">
          <MoviePassCards />
        </div>
      </div>
      <div className="cgvMovieKullanBg">
        <div className="cgvMovieKullan containerer">
          <CgvKullanim />
        </div>
      </div>
      <div className="cgvFagBg">
        <div className="cgvFag containerer">
          <CgvFag fag={cgvPassFag} max={4} />
        </div>
      </div>
      <div className="cgvReklamBg">
        <div className="cgvReklam containerer">
          <MobileReklam  />
        </div>
      </div>
    </>
  );
}

export default MoviePass;
