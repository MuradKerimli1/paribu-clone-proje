import React from "react";
import './UyeRight.css'

function UyeRight({ rightImage, rightNumber, str, paragraph, spText }) {
  return (
    <div className="uyeRightItem">
      <img src={`/Images/${rightImage}`} alt="gise" className="uyeRightIMage" />
      <div className="numberRightItem">
        <img src={`/Images/${rightNumber}`} alt="" />
        <strong>{str}</strong>
      </div>
      <p>{paragraph}</p>
      {spText && <span>{spText}</span>}
    </div>
  );
}

export default UyeRight;
