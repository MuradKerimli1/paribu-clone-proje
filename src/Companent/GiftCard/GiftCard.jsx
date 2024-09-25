import React from "react";
import "./GiftCard.css";

function GiftCard({ item }) {
  return (
    <div className="giftCardOn" key={item.id}>
      <div className="giftCardIn">
        <div className="giftCardHeader">
          <p className="giftCardrice">{item.price} TL</p>
          <div className="giftCardDec">
            <span>
              <img src="/Images/check.svg" alt="check" loading="lazy" />
              {item.cgvPara} CGV Para
            </span>
            <span>
              <img src="/Images/check.svg" alt="check" loading="lazy" />
              {item.size} BOY misir
            </span>
          </div>
        </div>
        <div className="giftCardImage">
          <img src={item.image} alt="giftCard" loading="lazy" />
          <div className="giftButtons">
            <button className="giftCardBuy">Hemen Bilet Al</button>
            <button className="giftCardIncele">Hediyye Et</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
