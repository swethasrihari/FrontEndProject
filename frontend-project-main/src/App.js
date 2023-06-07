//import treeImage from "./Images/treesImage.jpeg";
import React, { useState } from "react";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

import Navbar from "./Navigation/Navbar";

export const ModeContext = React.createContext();

export default function App() {
  const [mode, setMode] = useState({ bg: "light", text: "dark" });
  //console.log(mode);

  function modeToggler() {
    if (mode.bg === "light") {
      setMode({ bg: "dark", text: "light" });
    } else {
      setMode({ bg: "light", text: "dark" });
    }
  }

  return (
    <ModeContext.Provider value={mode}>
      <div className="App bg-info">
        <div className="row">
          <div className="col">
            <Header modeToggler={modeToggler} />
            <Navbar />
            <Footer />
          </div>
        </div>
      </div>
    </ModeContext.Provider>
  );
}
