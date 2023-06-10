import React, { useState, useEffect } from "react";
import "../App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Mode(props) {
  return (
    <div className={`Mode`}>
      <button
        type="button"
        alt="mode toggle"
        className={`btn modeLink bg-transparent text-light`}
        onClick={props.modeToggler}
      >
        <DarkModeIcon /> Mode
      </button>
    </div>
  );
}
export default Mode;
