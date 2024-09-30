import React, { useContext } from "react";
import "./SecondSinemaItem.css";
import { LuHeart } from "react-icons/lu";
import { GlobalContext } from "../../Context";

function SecondSinemaItem({ item, handleTicketFav }) {
  const { sinemaSecondFavorite } = useContext(GlobalContext);
  return (
    <div className="sinemaCard">
      <div className="sineCardText">
        <p>{item.name}</p>
        <span>{item.description}</span>
      </div>
      <div className="sineCardIcon">
        <span
          onClick={() => handleTicketFav(item.id)}
          className={`${
            sinemaSecondFavorite.some((filme) => filme.id == item.id)
              ? "favActive"
              : ""
          }`}
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

export default SecondSinemaItem;
