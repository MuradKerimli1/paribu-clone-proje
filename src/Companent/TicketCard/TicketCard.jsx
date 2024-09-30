import React, { useContext } from "react";
import "./TicketCard.css";
import { GlobalContext } from "../../Context";
import { FaRegHeart } from "react-icons/fa6";

function TicketCard({ item, handleTicketFav }) {
  const { filmFavorite } = useContext(GlobalContext);
  return (
    <div className="ticketCard">
      <div className="ticketHead">
        <div className="ticketImg">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="ticketImg"
          />
        </div>
        <div className="ticketName">
          <p>{item.original_title}</p>
          <span>{item.title}</span>
          <div className="ticketvote">
            <div className="voteContext">
              <img src="/Images/eggs-85.svg" alt="egg" />
              {item.vote_average.toFixed(1)}
            </div>
            <div className="voteImages">
              <img src="/Images/G.png" alt="g" />
              <img src="/Images/Şiddet.png" alt="siddet" />
              <img src="/Images/Olumsuz (1).png" alt="olumsuz" />
            </div>
          </div>
        </div>
      </div>
      <div className="ticketContext">
        <div className="ticketDate">
          <p>Vizyon Tarihi</p>
          <span>{item.release_date}</span>
        </div>
        <div className="ticketImgs">
          <img src="/Images/imax.svg" alt="imax" />
          <img src="/Images/4dx.svg" alt="4dx" />
          <img src="/Images/goldclass.svg" alt="gold" />
          <span>+4</span>
        </div>
      </div>
      <div
        className={`ticketFavorite ${
          filmFavorite.some((filme) => filme.id == item.id) ? "favActive" : ""
        }`}
        onClick={() => handleTicketFav(item.id)}
      >
        <FaRegHeart />
      </div>
    </div>
  );
}

export default TicketCard;
