import React, { useState } from "react";
import "./CgvFag.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

function CgvFag({ fag, max }) {
  const [maxFag, setMaxFag] = useState(max);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const handleBtn = () => {
    if (maxFag === fag.length) {
      setMaxFag(max);
    } else {
      setMaxFag(fag.length);
    }
  };

  return (
    <div className="cgvFag">
      <div className="fagTitle">
        <p>Sıkça Sorulan Sorular</p>
      </div>
      <div className="fagAccardion">
        {fag.slice(0, maxFag).map((item, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={() => handleExpansion(index)}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={[
              expandedIndex === index
                ? {
                    "& .MuiAccordion-region": {
                      height: "auto",
                    },
                    "& .MuiAccordionDetails-root": {
                      display: "block",
                    },
                  }
                : {
                    "& .MuiAccordion-region": {
                      height: 0,
                    },
                    "& .MuiAccordionDetails-root": {
                      display: "none",
                    },
                  },
              {
                backgroundColor: "#3D4245",
                padding: "4px",
                borderRadius: "8px",
                marginBottom: "13px",
                "& .MuiAccordionSummary-root": {
                  color: "white",
                },
                "& .MuiAccordionDetails-root": {
                  color: "#A7B2BB",
                  textAlign: "start",
                },
              },
            ]}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "35px", color: "white" }} />
              }
              aria-controls={`panel-content-${index}`}
              id={`panel-header-${index}`}
            >
              <Typography sx={{ fontSize: "16px", textAlign: "start" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "14px" }}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="fagButton">
        <button onClick={handleBtn}>
          {maxFag == fag.length ? "Daha Az Goster" : "Daha Fazla Goster"}
        </button>
      </div>
    </div>
  );
}

export default CgvFag;
