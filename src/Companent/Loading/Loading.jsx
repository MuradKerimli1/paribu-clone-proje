import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading_page">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress
          sx={{ color: "#98a726", width: 100, height: 100 }}
        />
      </Box>
    </div>
  );
}

export default Loading;
