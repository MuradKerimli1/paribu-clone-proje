import React, { useState } from "react";
import "./TicketSteps.css";
import TicketStep from "../TicketStep/TicketStep";
import TicketPrev from "../TicketPrev/TicketPrev";

function TicketSteps({ stepNum, setStepNum }) {
  function handlePrev() {
    if (stepNum < 4) {
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
          stepText={"Seans Seç"}
          isActive={stepNum === 1}
          isCompleted={stepNum > 1}
          handleGeri={() => handleGeri(1)}
        />
        <TicketStep
          num={2}
          stepText={"Bilet Tipi"}
          isActive={stepNum === 2}
          isCompleted={stepNum > 2}
          handleGeri={() => handleGeri(2)}
        />
        <TicketStep
          num={3}
          stepText={"Koltuk Seçimi"}
          isActive={stepNum === 3}
          isCompleted={stepNum > 3}
          handleGeri={() => handleGeri(3)}
        />
        <TicketStep
          num={4}
          stepText={"Ödeme"}
          isActive={stepNum === 4}
          isCompleted={stepNum > 4}
          handleGeri={() => handleGeri(4)}
        />
      </div>
      <div className="ticketPrev">
        <TicketPrev handlePrev={handlePrev} />
      </div>
    </div>
  );
}

export default TicketSteps;
