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

    /*document.getElementsByClassName(
      "nav"
    )[0].className = `nav bg-${theme}text-${textTheme} shadow flex-column nav-pills me-3 align-items-start`;
    document.getElementsByClassName(
      "navbar-brand"
    )[0].className = `navbar-brand bg-${theme} text-${textTheme}`;*/
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
