import React from "react";
import "./TicketPrev.css";

function TicketPrev({ handlePrev, isDisable }) {
  console.log(isDisable);

  return (
    <div className="ticketPrev">
      <p>
        Aşağıda listelenen film, salon ve seans seçeneklerinden tercihini
        yaparak diğer adımlara geçebilirsin.
      </p>
      <button
        disabled={!isDisable}
        onClick={handlePrev}
        className={`${isDisable ? "ticketBtnActive" : ""}`}
      >
        Devam Et
      </button>
    </div>
  );
}

export default TicketPrev;
