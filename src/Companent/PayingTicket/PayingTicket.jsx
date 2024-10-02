import React from "react";
import "./PayingTicket.css";
import PayingBasket from "../PayingBasket/PayingBasket";
import PayingForm from "../PayingForm/PayingForm";

function PayingTicket() {
  return (
    <div className="payingTicket">
      <div className="payingFormContainer">
        <PayingForm />
      </div>
      <div className="payingBasketContainer">
        <PayingBasket />
      </div>
    </div>
  );
}

export default PayingTicket;
