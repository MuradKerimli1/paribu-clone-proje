import React, { useContext, useState } from "react";
import "./TicketSteps.css";
import TicketStep from "../TicketStep/TicketStep";
import TicketPrev from "../TicketPrev/TicketPrev";
import { GlobalContext } from "../../Context";

function TicketSteps({
  stepNum,
  setStepNum,
  totalTicketPrice,
  ticketPrice,
  ticketBufePrice,
  kreslo,
}) {
  const { selectedTicketFilm, selectedTicketSinema, selectedTicketData } =
    useContext(GlobalContext);
  const firstPageBtn =
    selectedTicketFilm !== null &&
    selectedTicketSinema !== null &&
    selectedTicketData !== null;

  function handlePrev() {
    if (stepNum <= 4) {
      setStepNum(stepNum + 1);
    }
  }
  function handleGeri(num) {
    if (num < stepNum) {
      setStepNum(num);
    }
  }
  return (
    <div className="ticketStepsContainer">
      <div className="tickets">
        <TicketStep
          num={1}
          stepNum={stepNum}
          stepText={"Seans Seç"}
          isActive={stepNum === 1}
          isCompleted={stepNum > 1}
          handleGeri={() => handleGeri(1)}
          contextActive={1}
        />
        <TicketStep
          num={2}
          stepNum={stepNum}
          stepText={"Bilet Tipi"}
          isActive={stepNum === 2}
          isCompleted={stepNum > 2}
          handleGeri={() => handleGeri(2)}
          contextActive={2}
          ticketPrice={ticketPrice}
          ticketBufePrice={ticketBufePrice}
        />
        <TicketStep
          num={3}
          stepNum={stepNum}
          stepText={"Koltuk Seçimi"}
          isActive={stepNum === 3}
          isCompleted={stepNum > 3}
          handleGeri={() => handleGeri(3)}
          contextActive={3}
          kreslo={kreslo}
        />
        <TicketStep
          num={4}
          stepNum={stepNum}
          stepText={"Ödeme"}
          isActive={stepNum === 4}
          isCompleted={stepNum > 4}
          handleGeri={() => handleGeri(4)}
          contextActive={4}
        />
      </div>
      <div className="ticketPrev">
        <TicketPrev
          isDisable={
            (stepNum === 1 && firstPageBtn) ||
            (stepNum === 2 && totalTicketPrice > 0) ||
            (stepNum === 3 && kreslo.length > 0)
          }
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default TicketSteps;
