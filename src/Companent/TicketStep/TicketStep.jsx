import React from "react";
import "./TicketStep.css";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";

function TicketStep({ num, stepText, isActive, isCompleted, handleGeri }) {
  return (
    <div className="ticketStep">
      <div className="step-head">
        <div
          className="step-number"
          style={{
            borderColor: isActive ? "#96a825" : "white",
            backgroundColor: isCompleted ? "#96a825" : "transparent",
          }}
        >
          {isCompleted ? <MdOutlineDone /> : num}
        </div>
        <div className="step-text">{stepText}</div>
        <div className="step-handle" onClick={handleGeri}>
          <GrEdit />
        </div>
      </div>
      <div className="step-context">Burada değerler olacak</div>
    </div>
  );
}

export default TicketStep;
