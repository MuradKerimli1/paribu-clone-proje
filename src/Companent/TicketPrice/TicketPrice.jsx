import React from "react";
import './TicketPrice.css'

function TicketPrice({finalTotalPrice}) {
  return (
    <div className="TicketPrice">
      <span>Bilet Seçimi</span>
      <p>Toplam Fiyat: {finalTotalPrice} TL</p>
    </div>
  );
}

export default TicketPrice;
