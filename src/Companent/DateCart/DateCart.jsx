import React, { useContext } from "react";
import "./DateCart.css";
import { GlobalContext } from "../../Context";

function DateCart({ item, handleTicketData }) {
  const { selectedTicketData } = useContext(GlobalContext);

  return (
    <div className="DateCart">
      <p>{item.name} :</p>
      <div className="dateBtns">
        {item.Hours.map((btn, index) => {
          const isActive =
            selectedTicketData &&
            selectedTicketData.id === item.id &&
            selectedTicketData.secilmisData === btn;

          return (
            <span
              key={index}
              onClick={() => handleTicketData(item, btn)}
              className={isActive ? "activeBtn" : ""}
            >
              {btn}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default DateCart;
