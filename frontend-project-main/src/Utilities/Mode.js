import React, { useState, useEffect } from "react";
import "../App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Mode(props) {
  // const [theme, setTheme] = useState("light");
  // const [textTheme, setTextTheme] = useState("dark");
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //     setTextTheme("light");
  //   } else {
  //     setTextTheme("dark");
  //     setTheme("light");
  //   }
  // };
  // console.log("bg = " + theme);
  // console.log("text = " + textTheme);
  // useEffect(() => {
  //   if (theme === "dark")
  //     document.getElementsByClassName("App")[0].style.bachgroundImage = "";
  //   else
  //     document.getElementsByClassName("App")[0].style.bachgroundImage =
  //       'Url("background.jpeg")';
  //   document.getElementsByClassName(
  //     "App"
  //   )[0].className = `App bg-${theme} text-${textTheme}`;

  //   for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
  //     document.getElementsByClassName("card")[
  //       i
  //     ].className = `card bg-${theme} text-${textTheme} shadow my-2 mx-2`;
  //   }
  // }, [theme, textTheme]);

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
