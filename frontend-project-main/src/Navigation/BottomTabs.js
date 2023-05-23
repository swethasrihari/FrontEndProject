import { Link, Route, Routes } from "react-router-dom";
import Overview from "../TabViews/Overview";
import Electricity from "../TabViews/Electricity";
import Fuel from "../TabViews/Fuel";

export default function BottomTabs() {
  return (
    <div className="BottomContainer">
      <ul className="nav nav-tabs fixed-bottom">
        <li className="nav-item">
          <Link className="nav-link" to="/overview">
            Overview
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/electricity">
            Electricity
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fuel">
            Fuel
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/fuel" element={<Fuel />} />
      </Routes>
    </div>
  );
}
