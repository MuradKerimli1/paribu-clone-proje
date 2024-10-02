import React from "react";
import "./KoltukRowss.css";
import Koltuklar from "../Koltuklar/Koltuklar";
import KoltukRow from "../KoltukRow/KoltukRow";
import KoltuklarDescription from "../KoltuklarDescription/KoltuklarDescription";

function KoltukRowss({ koltukRow, seatsData, handleClickKoltuk, kreslo }) {
  const typeSeats = Array.from(new Set(seatsData.map((seat) => seat.type)));
  return (
    <div className="koltukRowss">
      <div className="koltukRowssHead">
        <img src="/Images/movie-screen.svg" alt="movieScreen" />
      </div>
      <div className="koltukRowssContext">
        {koltukRow.map((row) => (
          <div key={row} className="koltukRowContainer">
            <div className="koltukRowes">
              <KoltukRow koltukRow={[row]} />
            </div>

            <div className="koltuklarRows">
              <Koltuklar
                handleClickKoltuk={handleClickKoltuk}
                seatsData={seatsData.filter((seat) => seat.row === row)}
                kreslo={kreslo} 
              />
            </div>

            <div className="koltukRowes">
              <KoltukRow koltukRow={[row]} />
            </div>
          </div>
        ))}
        <KoltuklarDescription typeSeats={typeSeats} />
      </div>
    </div>
  );
}

export default KoltukRowss;
