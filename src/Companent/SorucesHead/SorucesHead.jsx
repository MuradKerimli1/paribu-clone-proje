import React from "react";
import "./SorucesHead.css";

function SorucesHead({ sourcesText, handleGeri, num, handleShowSoruces }) {
  function handleGeriye(num) {
    handleGeri(num);
    handleShowSoruces();
  }
  return (
    <div className="sorucesHeadMain">
      <p>{sourcesText}</p>
      <span onClick={() => handleGeriye(num)}>Degistir</span>
    </div>
  );
}

export default SorucesHead;
