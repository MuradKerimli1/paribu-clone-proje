import React from "react";
import "./OtherPopularFilms.css";
import { useNavigate } from "react-router-dom";

function OtherPopularFilms({ handleToggleSearch }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    handleToggleSearch();
    navigate(path);
  };

  return (
    <div className="otherPopular">
      <p className="otherPopularTitle">Diğer Popüler Aramalar</p>
      <ul className="otherPopularList">
        <li onClick={() => handleClick("/moviePass")}>CGV MoviePass</li>
        <li onClick={() => handleClick("/cocukAile")}>Çocuk Aile</li>
        <li onClick={() => handleClick("/goldenEgg")}>Golden Egg</li>
        <li onClick={() => handleClick("/sinemalar")}>Sinemalar</li>
        <li onClick={() => handleClick("/company")}>Kompaniyalar</li>
      </ul>
    </div>
  );
}

export default OtherPopularFilms;
