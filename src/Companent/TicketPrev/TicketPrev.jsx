import React from "react";
import "./TicketPrev.css";
import BiletSoruces from "../BiletSoruces/BiletSoruces";

function TicketPrev({ handlePrev, isDisable, stepNum, finalTotalPrice }) {
  return (
    <div className="ticketPrev">
      {stepNum !== 4 && (
        <>
          <p>
            Aşağıda listelenen film, salon ve seans seçeneklerinden tercihini
            yaparak diğer adımlara geçebilirsin.
          </p>
          <div className="prevBtns">
            <button className="toplamDiv">
              <strong>
                Toplam Fiyat: <br />
                <span>{finalTotalPrice} TL</span>
              </strong>
              <img src="/Images/arrowicon.svg" alt="arrow" />
            </button>
            <button
              disabled={!isDisable}
              onClick={handlePrev}
              className={`${isDisable ? "ticketBtnActive" : ""}`}
            >
              Devam Et
            </button>
          </div>
          <div className="biletSoruces">
            <BiletSoruces />
          </div>
        </>
      )}
    </div>
  );
}

export default TicketPrev;
