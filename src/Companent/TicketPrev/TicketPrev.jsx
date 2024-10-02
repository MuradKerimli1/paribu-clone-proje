import React, { useState } from "react";
import "./TicketPrev.css";
import BiletSoruces from "../BiletSoruces/BiletSoruces";

function TicketPrev({
  handlePrev,
  isDisable,
  stepNum,
  finalTotalPrice,
  ticketPrice,
  ticketBufePrice,
  kreslo,
  handleGeri
}) {
  const [showSources, setShowSources] = useState(false);

  function handleShowSoruces() {
    setShowSources((prev) => !prev);
  }
  return (
    <div className="ticketPrev">
      {stepNum !== 4 && (
        <>
          <p className="ticketPrevParagrapg">
            Aşağıda listelenen film, salon ve seans seçeneklerinden tercihini
            yaparak diğer adımlara geçebilirsin.
          </p>
          <div className="prevBtns">
            {stepNum > 1 && (
              <button className="toplamDiv" onClick={handleShowSoruces}>
                <strong>
                  Toplam Fiyat: <br />
                  <span>{finalTotalPrice} TL</span>
                </strong>
                <img
                  src="/Images/arrowicon.svg"
                  alt="arrow"
                  className={`${showSources ? "arrowActive" : ""}`}
                />
              </button>
            )}

            <button
              disabled={!isDisable}
              onClick={handlePrev}
              className={`${isDisable ? "ticketBtnActive" : ""}`}
            >
              Devam Et
            </button>
          </div>

          <div className="biletSoruces">
            <BiletSoruces
              showSources={showSources}
              ticketPrice={ticketPrice}
              ticketBufePrice={ticketBufePrice}
              kreslo={kreslo}
              handleCloseSoruces={handleShowSoruces}
              handleGeri={handleGeri}
              handleShowSoruces={handleShowSoruces}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default TicketPrev;
