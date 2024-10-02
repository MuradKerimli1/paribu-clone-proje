import React from "react";
import "./TicketTypeCard.css";

function TicketTypeCard({ ticket, handleTicketplus, handleTicketMinus }) {
  return (
    <div className="ticketTypeCard">
      <div className="ticketTypeCardLeft">
        <div className="TicketCardLeftHead">
          <img src={ticket.image} alt="ticket" />
          <p className="ticketCardRealName">{ticket.name}</p>
          <p className="ticketCardNickName">{ticket.nickname}</p>
        </div>
        <div className="TicketCardLeftPrice">
          <span className="ticketPriceLEft">{ticket.price} TL</span>
        </div>
      </div>
      <div className="ticketTypeCardRight">
        <button onClick={() => handleTicketplus(ticket.id)}>
          <img src="/Images/plusIcone.svg" alt="plusicone" />
        </button>
        <span>{ticket.number || 0}</span>
        <button onClick={() => handleTicketMinus(ticket.id)}>
          <img src="/Images/minusIcone.svg" alt="minusIcone" />
        </button>
      </div>
    </div>
  );
}

export default TicketTypeCard;
