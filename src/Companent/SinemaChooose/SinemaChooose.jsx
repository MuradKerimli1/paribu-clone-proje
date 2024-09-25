import React, { useEffect, useState } from "react";
import "./SinemaChooose.css";

function SinemaChooose({ filterHeaderText, data, handleSelection,zIndexx}) {
  const [filteredData, setFilteredData] = useState(data);
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedText, setSelectedText] = useState(filterHeaderText);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, data]);

  function handleSelect(item) {
    setSelectedText(item);
    handleSelection(item === "Tümü" ? "" : item);
    setActive(false);
    setInputValue("");
  }

  return (
    <div className="filterChoose" style={{ zIndex:zIndexx }}>
      <div
        className="filterChooseHead"
        onClick={() => setActive((prev) => !prev)}
      >
        <span>{selectedText}</span>
        <img src="/Images/input-arrow-down (1).svg" alt="" />
      </div>
      <div className={`filterChooseContext ${active ? "active" : ""}`}>
        <input
          type="text"
          placeholder={filterHeaderText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ul className="filterChooseList">
          <li onClick={() => handleSelect("Tümü")}>Tümü</li>
          {filteredData.map((item) => (
            <li key={item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SinemaChooose;
