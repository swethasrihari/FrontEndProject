import Overview from "../TabViews/Overview";
import Electricity from "../TabViews/Electricity";
import Fuel from "../TabViews/Fuel";
import { Link, Routes, Route } from "react-router-dom";
function Charts() {
  return (
    <>
      <div className="container" id="tabs">
        <div className="navbar mx-2 bg-transparent">
          <div className="container-fluid">
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
