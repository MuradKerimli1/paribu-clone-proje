import React from "react";
import "./ParibuLogo.css";
import { Link } from "react-router-dom";

function ParibuLogo() {
  return (
    <Link to="/">
      <img
        src="/Images/svgviewer-png-output.webp"
        alt="ParibuLogo"
        className="ParibuLogo"
        srcSet="/Images/svgviewer-png-output.webp 150w,
        /Images/svgviewer-png-output.webp 300w"
        sizes="(max-width: 650px) 130px, (min-width: 650px) 155px, (min-width: 992px) 150px"
      />
    </Link>
  );
}

export default ParibuLogo;
