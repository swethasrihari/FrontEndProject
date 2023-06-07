import Overview from "../TabViews/Overview";
import Electricity from "../TabViews/Electricity";
import Fuel from "../TabViews/Fuel";
import { Link, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import { useState, useEffect } from "react";
import TransportChart from "../views/TransportChart";
function Charts() {
  //const [buttonActive, setButtonActive] = useState("");
  const url =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&facets[stateId][]=US&data[]=value";

  const [sectorData, setSectorData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.response.data);
        setSectorData(data.response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <>
      <div className="navContainer bg-transparent" id="tabs">
        <div className="navbar bg-transparent flex-row mx-2">
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
          <span className="mx-2">
            <button className="btn btn-secondary">
              <Link to="/Transport" className="nav-link">
                Transport
              </Link>
            </button>
          </span>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Overview sdata={sectorData} />} />
        <Route
          path="/Electricity"
          element={<Electricity sdata={sectorData} />}
        />
        <Route path="/Fuel" element={<Fuel sdata={sectorData} />} />
        <Route path="/Transport" element={<TransportChart />} />
      </Routes>
    </>
  );
}
export default Charts;
