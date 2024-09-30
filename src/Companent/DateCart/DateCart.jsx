import React from "react";
import "./DateCart.css";

function DateCart({ item }) {
  return (
    <div className="DateCart">
      <p>{item.name} :</p>
      <div className="dateBtns">
        {item.Hours.map((btn, index) => (
          <span key={index}>{btn}</span>
        ))}
      </div>
    </div>
  );
}

export default DateCart;
