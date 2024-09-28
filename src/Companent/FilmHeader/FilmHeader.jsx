import React from "react";
import './FilmHeader.css'

function FilmHeader({ filmContext }) {
  return (
    <div className="filmHeaderBg">
      <div className="filmHeaderContext containerer">
        <p className="filmHeaderText">{filmContext}</p>
      </div>
    </div>
  );
}

export default FilmHeader;
