import Overview from "../TabViews/Overview";
import Electricity from "../TabViews/Electricity";
import Fuel from "../TabViews/Fuel";

import { Link, Routes, Route } from "react-router-dom";
function Charts() {
  return (
    <>
      <div>
        <button className="nav-item ">
          <Link to="/" className="nav-link active" aria-current="page">
            Overview
          </Link>
        </button>
        <button className="nav-item ">
          <Link to="/Electricity" className="nav-link">
            Electricity
          </Link>
        </button>
        <button className="nav-item">
          <Link to="/Fuel" className="nav-link">
            Fuel
          </Link>
        </button>
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
