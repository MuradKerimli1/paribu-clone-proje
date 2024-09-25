import React, { useContext } from "react";
import './MoviePassCards.css'
import { GlobalContext } from "../../Context";
import GiftCard from "../GiftCard/GiftCard";

function MoviePassCards() {
  const { giftCardData } = useContext(GlobalContext);
  return (
    <div className="passCardContainer">
      <p className="cardstextMovie">
        Sinemada film izlemenin daha hesaplı, daha kolay, çook sürprizli yolu CGV
        MoviePass’te! Haydi hiç vakit kaybetmeden, paketini seç sinemaya gel!
        CGV Para’larınla hem mısır hem de sürpriz hediyeler senin olsun
      </p>
      <div className="moviePassCards">
        {
            giftCardData.map((item,index)=><GiftCard key={index} item={item}/>)
        }
      </div>
    </div>
  );
}

export default MoviePassCards;
