import React from "react";
import "./TicketType.css";
import TicketTypeCard from "../TicketTypeCard/TicketTypeCard";

function TicketType({
  ticketArray,
  handleTicketplus,
  handleTicketMinus,
  ticketPrice,
}) {
  return (
    <div className="ticketTyps">
      {ticketArray.map((ticket) => {
        const ticketCount =
          ticketPrice.find((t) => t.id === ticket.id)?.number || 0;
        return (
          <TicketTypeCard
            key={ticket.id}
            ticket={{ ...ticket, number: ticketCount }}
            handleTicketplus={handleTicketplus}
            handleTicketMinus={handleTicketMinus}
          />
        );
      })}
    </div>
  );
}

export default TicketType;
