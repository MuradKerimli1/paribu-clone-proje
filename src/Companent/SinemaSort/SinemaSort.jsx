import React, { useState } from "react";
import "./SinemaSort.css";

function SinemaSort({ setSortOrder, seFavOrSin }) {
  const [active, setActive] = useState("sinema");

  const handleSort = (order) => {
    setSortOrder(order);
    setActive("sort");
  };

  const handleFavOrSin = (type) => {
    seFavOrSin(type);
    setActive(type);
  };

  return (
    <div className="sinemaSort">
      <p
        onClick={() => handleFavOrSin("sinema")}
        className={active === "sinema" ? "active" : ""}
      >
        Sinemalar
      </p>
      <p
        onClick={() => handleSort("name")}
        className={active === "sort" ? "active" : ""}
        style={{ cursor: "pointer" }}
      >
        İsme Göre Sırala
      </p>
      <p
        onClick={() => handleFavOrSin("favori")}
        className={active === "favori" ? "active" : ""}
      >
        Favoriler
      </p>
    </div>
  );
}

export default SinemaSort;
