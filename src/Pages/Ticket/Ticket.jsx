import React, { useContext, useState } from "react";
import "./Ticket.css";
import TicketSteps from "../../Companent/TicketSteps/TicketSteps";
import TicketSelecting from "../../Companent/TicketSelecting/TicketSelecting";
import TicketBasket from "../../Companent/TicketBasket/TicketBasket";
import KoltukSecim from "../../Companent/KoltukSecim/KoltukSecim";
import PayingTicket from "../../Companent/PayingTicket/PayingTicket";
import { GlobalContext } from "../../Context";

function Ticket() {
  const { seatsData } = useContext(GlobalContext);
  const [stepNum, setStepNum] = useState(1);
  const [ticketPrice, setTicketPrice] = useState([]);
  const [ticketBufePrice, setTicketBufePrice] = useState([]);
  const calculateTotalPrice = (ticketArray) => {
    return ticketArray?.reduce((acc, ticket) => {
      const ticketPrice = ticket.price || 0;
      const ticketNumber = ticket.number || 0;
      return acc + ticketPrice * ticketNumber;
    }, 0);
  };
  const totalTicketPrice = calculateTotalPrice(ticketPrice);
  const totalBufePrice = calculateTotalPrice(ticketBufePrice);
  const finalTotalPrice = totalTicketPrice + totalBufePrice;
  const [kreslo, setKreslo] = useState([]);

  return (
    <div className="ticketPage">
      <div className="ticketContainer containerer">
        <TicketSteps
          stepNum={stepNum}
          setStepNum={setStepNum}
          totalTicketPrice={totalTicketPrice}
          ticketPrice={ticketPrice}
          ticketBufePrice={ticketBufePrice}
          kreslo={kreslo}
        />
        {stepNum === 1 && <TicketSelecting />}
        {stepNum === 2 && (
          <TicketBasket
            finalTotalPrice={finalTotalPrice}
            ticketPrice={ticketPrice}
            setTicketPrice={setTicketPrice}
            ticketBufePrice={ticketBufePrice}
            setTicketBufePrice={setTicketBufePrice}
          />
        )}
        {stepNum === 3 && (
          <KoltukSecim
            seatsData={seatsData}
            kreslo={kreslo}
            setKreslo={setKreslo}
          />
        )}
        {stepNum === 4 && <PayingTicket />}
      </div>
    </div>
  );
}

export default Ticket;
