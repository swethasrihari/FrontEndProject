import Overview from "../TabViews/Overview";
import Electricity from "../TabViews/Electricity";
import Fuel from "../TabViews/Fuel";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
function Charts() {
  const [buttonActive, setButtonActive] = useState("");

  return (
    <>
      <div className="container bg-transparent" id="tabs">
        <div className="navbar flex-row mx-2">
          <span className="mx-2">
            <button className="btn btn-secondary ">
              <Link to="/" className="nav-link" aria-current="page">
                Overview
              </Link>
            </button>
          </span>
          <span className="mx-2">
            <button className="btn btn-secondary">
              <Link to="/Electricity" className="nav-link">
                Electricity
              </Link>
            </button>
          </span>
          <span className="mx-2">
            <button className="btn btn-secondary">
              <Link to="/Fuel" className="nav-link">
                Fuel
              </Link>
            </button>
          </span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/Electricity" element={<Electricity />} />
        <Route path="/Fuel" element={<Fuel />} />
      </Routes>
    </>
  );
}
export default Charts;
