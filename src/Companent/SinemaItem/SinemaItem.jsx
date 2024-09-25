import React from "react";
import "./SinemaItem.css";
import { LuHeart } from "react-icons/lu";

function SinemaItem({ item, toggleFavorite, isFavorited }) {
  return (
    <div className="sinemaCard">
      <div className="sineCardText">
        <p>{item.name}</p>
        <span>{item.description}</span>
      </div>
      <div className="sineCardIcon">
        <span
          onClick={() => toggleFavorite(item)}
          className={isFavorited ? "favActive" : ""}
        >
          <LuHeart />
        </span>

        <img
          src="/Images/send (1).svg"
          alt="send"
          onClick={() => window.open(item.url, "_blank")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default SinemaItem;
