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
    let imageLight = {
      height: "350px",
      width: "600px",
      backgroundImage: 'url("background.jpeg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white"
    };
    let imageDark = {
      backgroundImage: "none",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };

    if (theme === "dark")
      document.getElementsByClassName("App")[0].style = imageDark;
    else document.getElementsByClassName("App")[0].style = imageLight;

    document.getElementsByClassName(
      "App"
    )[0].className = `App bg-${theme} text-${textTheme}`;

    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
      document.getElementsByClassName("card")[
        i
      ].className = `card bg-${theme} text-${textTheme} shadow my-2 mx-2`;
    }
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
