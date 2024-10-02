import React from "react";
import "./KoltukError.css";

function KoltukError({handleCloseKoltuk}) {
  return (
    <div className="koltukError">
      <div className="koltukErrorText">
        <img
          src="/Images/cgv-icon.svg"
          alt="error"
          className="koltukErrorImg"
        />
        <p>En fazla 2 adet koltuk seçebilirsin.</p>
        <button className="koltukOk" onClick={handleCloseKoltuk}>
          Tamam
        </button>
        <button className="koltukClose" onClick={handleCloseKoltuk}>
          <img
            src="/Images/close-modal (1).svg"
            alt="koltukErrorClose"
            className="koltukErrorClose"
          />
        </button>
      </div>
    </div>
  );
}

export default KoltukError;
