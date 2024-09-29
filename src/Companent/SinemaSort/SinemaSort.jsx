import React, { useContext, useState } from "react";
import "./SinemaSort.css";
import { GlobalContext } from "../../Context";

function SinemaSort({ setSortOrder, seFavOrSin,setFavoriUye}) {
  const { accauntPerson } = useContext(GlobalContext);
  const [active, setActive] = useState("sinema");
  

  const handleSort = (order) => {
    setSortOrder(order);
    setActive("sort");
  };

  const handleFavOrSin = (type) => {
    if (accauntPerson !== null) {
      seFavOrSin(type);
      setActive(type);
    } else {
      setFavoriUye(true);
    }
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
