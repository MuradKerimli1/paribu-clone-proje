import React, { useContext } from "react";
import "./SliderCart.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SliderCart({ element, handleBuyTicketClick }) {
  const selected = useNavigate();
  return (
    <div className="sliderCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
        alt={element.title}
        loading="lazy"
      />
      <div className="slider-Card-context">
        <p>{element.title}</p>
        <span>
          <FaStar className="slider-icon-start" />
          {element.vote_average.toFixed(2)}
        </span>
      </div>
      <div className="sliderCard-buttons">
        <button
          className="sliderBuy-button"
          onClick={() => handleBuyTicketClick(element.id)}
        >
          Hemen Bilet Al
        </button>
        <button
          className="sliderBuy-Incele"
          onClick={() => selected(`/selectedMovie/${element.title}`)}
        >
          Incele
        </button>
      </div>
      <div className="sliderCard-premium">
        <img src="/Images/4dx-w.svg" alt="$dx" loading="lazy" />
        <img src="/Images/gold-class-w.svg" alt="Gold-glas" loading="lazy" />
        <img
          src="/Images/premium-cinema-w.svg"
          alt="Premium-cinema"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default SliderCart;
