import React from "react";
import './SorucesHead.css'

function SorucesHead({ sourcesText }) {
  return (
    <div className="sorucesHeadMain">
      <p>{sourcesText}</p>
      <span>Degistir</span>
    </div>
  );
}

export default SorucesHead;
