import React, { useContext, useState } from "react";
import "./KoltukSecim.css";
import KoltukRowss from "../KoltukRowss/KoltukRowss";
import { GlobalContext } from "../../Context";
import KoltukError from "../KoltukError/KoltukError";

function KoltukSecim({ seatsData, kreslo, setKreslo }) {
  const { handleTicketFav } = useContext(GlobalContext);
  const koltukRow = Array.from(new Set(seatsData.map((seat) => seat.row)));
  const [showKoltukError, setShowKoltukError] = useState(false);

  function handleClickKoltuk(deger) {
    if (kreslo.length < 2 || kreslo.some((k) => k.id === deger)) {
      setShowKoltukError(false);
      handleTicketFav(deger, seatsData, kreslo, setKreslo);
    } else {
      setShowKoltukError(true);
    }
  }

  return (
    <div className="koltukSecim">
      <div className="koltukContainer">
        <KoltukRowss
          koltukRow={koltukRow}
          seatsData={seatsData}
          handleClickKoltuk={handleClickKoltuk}
          kreslo={kreslo}
        />
      </div>
      {showKoltukError && (
        <KoltukError handleCloseKoltuk={() => setShowKoltukError(false)} />
      )}
    </div>
  );
}

export default KoltukSecim;
