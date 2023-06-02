import React, { useState, useEffect } from "react";
import "../App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Mode() {
  const [theme, setTheme] = useState("light");
  const [textTheme, setTextTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setTextTheme("light");
    } else {
      setTextTheme("dark");
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = `bg-${theme} text-${textTheme}`;
    /* if (theme === "light") {
      document.getElementsByClassName(
        "container"
      )[0].className = `container bg-transparent`;
    } else {
      document.getElementsByClassName(
        "container"
      )[0].className = `container bg-${theme}`;
    }*/
    document.getElementsByClassName(
      "card"
    )[0].className = `card bg-${theme} text-${textTheme} shadow my-2 mx-2`;
  }, [theme, textTheme]);

  return (
    <div className={`Mode`}>
      <button
        type="button"
        alt="mode toggle"
        className={`btn modeLink bg-transparent text-light`}
        onClick={toggleTheme}
      >
        <DarkModeIcon /> Mode
      </button>
    </div>
  );
}
export default Mode;
