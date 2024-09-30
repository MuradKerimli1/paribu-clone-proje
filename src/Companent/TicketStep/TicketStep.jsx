import React from "react";
import "./TicketStep.css";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDone } from "react-icons/md";

function TicketStep({
  num,
  stepNum,
  stepText,
  isActive,
  isCompleted,
  handleGeri,
  contextActive,
}) {
  console.log(num);

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
        {isCompleted && (
          <div className="step-handle" onClick={handleGeri}>
            <GrEdit />
          </div>
        )}
      </div>
      <div className="step-context">
        {stepNum > 1 && contextActive === 1 && "murad"}
        {stepNum > 2 && contextActive === 2 && "islam"}
        {stepNum > 3 && contextActive === 3 && "habil"}
        {stepNum > 4 && contextActive === 4 && "leyla"}
      </div>
    </div>
  );
}

export default TicketStep;
