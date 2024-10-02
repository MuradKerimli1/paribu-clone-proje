import React, { useContext } from "react";
import "./TicketBasket.css";
import TicketPrice from "../TicketPrice/TicketPrice";
import TicketType from "../TicketType/TicketType";
import TicketSwiper from "../TicketSwiper/TicketSwiper";
import { GlobalContext } from "../../Context";
function TicketBasket({
  finalTotalPrice,
  ticketPrice,
  setTicketPrice,
  ticketBufePrice,
  setTicketBufePrice,
}) {
  const { ticketArray, bufeArray } = useContext(GlobalContext);

  function handleTicketplus(deyerPlus) {
    const selectedPlusTicket = ticketArray.find(
      (ticket) => ticket.id === deyerPlus
    );

    const existingTicket = ticketPrice.find(
      (ticket) => ticket.id === deyerPlus
    );

    if (existingTicket) {
      const updatedTickets = ticketPrice.map((ticket) =>
        ticket.id === deyerPlus
          ? { ...ticket, number: ticket.number + 1 }
          : ticket
      );
      setTicketPrice(updatedTickets);
    } else {
      const newTicket = { ...selectedPlusTicket, number: 1 };
      setTicketPrice((prev) => [...prev, newTicket]);
    }
  }

  function handleTicketMinus(deyerSecond) {
    const existingTickett = ticketPrice.find(
      (ticket) => ticket.id === deyerSecond
    );

    if (existingTickett && existingTickett.number > 1) {
      const updatedTickets = ticketPrice.map((ticket) =>
        ticket.id === deyerSecond
          ? { ...ticket, number: ticket.number - 1 }
          : ticket
      );
      setTicketPrice(updatedTickets);
    } else if (existingTickett && existingTickett.number === 1) {
      const updatedTickets = ticketPrice.filter(
        (ticket) => ticket.id !== deyerSecond
      );
      setTicketPrice(updatedTickets);
    }
  }

  function handleBufeMinus(bufeSecond) {
    const existingBufeItem = ticketBufePrice.find(
      (bufe) => bufe.id === bufeSecond
    );

    if (existingBufeItem) {
      if (existingBufeItem.number > 1) {
        const updatedTicketBufePrice = ticketBufePrice.map((bufeItem) =>
          bufeItem.id === bufeSecond
            ? { ...bufeItem, number: bufeItem.number - 1 }
            : bufeItem
        );
        setTicketBufePrice(updatedTicketBufePrice);
      } else {
        const updatedTicketBufePrice = ticketBufePrice.filter(
          (bufeItem) => bufeItem.id !== bufeSecond
        );
        setTicketBufePrice(updatedTicketBufePrice);
      }
    }
  }

  function handleBufePlus(bufeSecond) {
    const selectedBufeItem = bufeArray.find((item) => item.id === bufeSecond);

    const ActiveBufeItem = ticketBufePrice.filter(
      (bufe) => bufe.id === bufeSecond
    );

    if (ActiveBufeItem.length > 0) {
      const updatedTicketBufePrice = ticketBufePrice.map((bufeItem) =>
        bufeItem.id === bufeSecond
          ? { ...bufeItem, number: bufeItem.number + 1 }
          : bufeItem
      );
      setTicketBufePrice(updatedTicketBufePrice);
    } else if (selectedBufeItem) {
      const addingBufeItem = { ...selectedBufeItem, number: 1 };
      setTicketBufePrice((prev) => [...prev, addingBufeItem]);
    }
  }

  return (
    <div className="ticketBasket">
      <TicketPrice finalTotalPrice={finalTotalPrice} />
      <TicketType
        ticketArray={ticketArray}
        ticketPrice={ticketPrice}
        handleTicketplus={handleTicketplus}
        handleTicketMinus={handleTicketMinus}
      />
      <TicketSwiper
        ticketBufePrice={ticketBufePrice}
        handleBufeMinus={handleBufeMinus}
        handleBufePlus={handleBufePlus}
      />
    </div>
  );
}

export default TicketBasket;
