import React from "react";
import './CgvMoviePass.css'

function CgvMoviePass() {
  return (
    <div className="cgvMoviePass">
      <div className="cgvMovieContainer containerer">
        <div className="chgMovieLogo">
          <div className="cgvmovieIcon">
            <img src="/Images/cgv-pass-sm.svg" alt="cg" loading="lazy" />
          </div>
          <div className="cgvmovie-title">
            <h3>CGV MoviePass</h3>
          </div>
        </div>
        <div className="cgvMovieContent">
          <p>
            Sinemada film izlemenin daha hesaplı, daha kolay, çook sürprizli
            yolu CGV MoviePass’te! Haydi hiç vakit kaybetmeden, paketini seç
            sinemaya gel! 
          </p>
        </div>
        <div className="cgvMovieContact">
            <span>Detaylı Bilgi İçin Tıkla</span>
        </div>
      </div>
    </div>
  );
}

export default CgvMoviePass;
