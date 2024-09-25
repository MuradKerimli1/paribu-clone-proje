import React, { useState } from "react";
import "./SinemaSearching.css";

function SinemaSearching({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="sinemaSearch">
      <input
        type="text"
        placeholder="Salon Ara"
        value={inputValue}
        onChange={handleChange}
      />
      <img src="/Images/search (1).png" alt="lupa" />
    </div>
  );
}

export default SinemaSearching;
