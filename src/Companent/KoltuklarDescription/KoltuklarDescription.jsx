import React from "react";
import "./KoltuklarDescription.css";

function KoltuklarDescription({ typeSeats }) {
  console.log(typeSeats);

  return (
    <div className="koltuklarDescription">
      {typeSeats.map((typeSeat, index) => (
        <div key={index} className="seatWrapper">
          <div
            className={`seat ${
              typeSeat === "premium" ? "premiumSeat" : ""
            } ${typeSeat === "business" ? "businessSeat" : ""} ${
              typeSeat === "handicapped" ? "sold" : ""
            }`}
          ></div>
          <span>{typeSeat}</span>
        </div>
      ))}
    </div>
  );
}

export default KoltuklarDescription;
