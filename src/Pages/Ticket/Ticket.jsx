import React, { useState } from "react";
import "./Ticket.css";
import TicketSteps from "../../Companent/TicketSteps/TicketSteps";
import TicketSelecting from "../../Companent/TicketSelecting/TicketSelecting";
import TicketBasket from "../../Companent/TicketBasket/TicketBasket";
import KoltukSecim from "../../Companent/KoltukSecim/KoltukSecim";
import PayingTicket from "../../Companent/PayingTicket/PayingTicket";

function Ticket() {
  const [stepNum, setStepNum] = useState(1);
  return (
    <div className="ticketPage">
      <div className="ticketContainer containerer">
        <TicketSteps stepNum={stepNum} setStepNum={setStepNum} />
        {stepNum === 1 && <TicketSelecting />}
        {stepNum === 2 && <TicketBasket />}
        {stepNum === 3 && <KoltukSecim />}
        {stepNum === 4 && <PayingTicket />}
      </div>
    </div>
  );
}

export default Ticket;
