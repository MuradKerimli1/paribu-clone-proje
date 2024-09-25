import React from "react";
import './UyeAyricalik.css'

function UyeAyricalik({ uyeImg, uyeImgSpan, uyeBtn, uyeParagraph, uySpan }) {
  return (
    <div className="uyeAyricalikIteme">
      <div className="uyeAyricalikHeader">
        <img src={`/Images/${uyeImg}`} alt="uyeImg" />
        <span>{uyeImgSpan}</span>
      </div>
      <button>{uyeBtn}</button>
      <p>{uyeParagraph}</p>
      {uySpan && <span className="uyeItemspp">{uySpan}</span>}
    </div>
  );
}

export default UyeAyricalik;
