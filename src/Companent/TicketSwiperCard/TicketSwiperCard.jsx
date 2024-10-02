import React from "react";
import "./TicketSwiperCard.css";

function TicketSwiperCard({
  bufe,
  handleBufeMinus,
  handleBufePlus,
  ticketBufePrice,
}) {
  const currentBufeItem = ticketBufePrice.find((item) => item.id === bufe.id);
  const currentNumber = currentBufeItem ? currentBufeItem.number : 0;

  return (
    <div className="ticketSwiperCard">
      <div className="ticketSwiperCardLeft">
        <div className="ticketSwiperCardLeftImg">
          <img src={bufe.image} alt="bufe" />
        </div>
        <div className="ticketSwiperCardLeftText">
          <span className="bufeName">{bufe.name}</span>
          <div className="bufePrice">
            <span>{bufe.oldprice} TL</span>
            <p>{bufe.price} TL</p>
          </div>
        </div>
      </div>
      <div className="ticketSwiperCardRight">
        <button onClick={() => handleBufeMinus(bufe.id)}>
          <img src="/Images/minusIcone.svg" alt="minusIcone" />
        </button>
        <span>{currentNumber}</span>
        <button onClick={() => handleBufePlus(bufe.id)}>
          <img src="/Images/plusIcone.svg" alt="plusicone" />
        </button>
      </div>
      <div className="swiperCardReklam">
        <span>Internete Ozel</span>
      </div>
    </div>
  );
}

export default TicketSwiperCard;
