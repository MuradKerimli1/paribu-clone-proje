import React from "react";
import "./SinemaItems.css";
import SinemaItem from "../SinemaItem/SinemaItem";

function SinemaItems({ globalSalonn, toggleFavorite, favorites }) {
  return (
    <div className="salonCards">
      {globalSalonn.length > 0 ? (
        globalSalonn.map((item) => (
          <SinemaItem
            item={item}
            key={item.id}
            toggleFavorite={toggleFavorite}
            isFavorited={favorites.some((fav) => fav.id === item.id)}
          />
        ))
      ) : (
        <p className="salonTitleNon">Bele bir Salon yoxdur</p>
      )}
    </div>
  );
}

export default SinemaItems;
