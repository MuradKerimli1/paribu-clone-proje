import React from "react";
import "./Koltuklar.css";
import { MdOutlinePerson } from "react-icons/md";

function Koltuklar({ seatsData, handleClickKoltuk, kreslo }) {
  console.log(kreslo);

  return (
    <div className="koltuklar">
      <div className="koltuklarContainer">
        {seatsData.map((seat) => (
          <button
            onClick={() => handleClickKoltuk(seat.id)}
            disabled={seat.occupied}
            key={`${seat.row}-${seat.seatNumber}`}
            className={`seatKres
              ${seat.type === "normal" ? "normalSeat" : ""}
              ${seat.type === "premium" ? "premiumSeat" : ""}
              ${seat.type === "business" ? "businessSeat" : ""}
              ${seat.occupied ? "sold" : ""}`}
          >
            {seat.occupied && <MdOutlinePerson className="activePerson" />}

            {kreslo.some((kres) => kres.id === seat.id) && (
              <MdOutlinePerson className="activePerson" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Koltuklar;
