import Navbar from "./navigation/navbar";
import Overview from "./views/overview";
import Electricity from "./views/electricity";
import Fuel from "./views/fuel";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./styles.css";

export default function App() {
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
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/Overview" element={<Overview sdata={sectorData} />} />
          <Route
            path="/electricity"
            element={<Electricity sdata={sectorData} />}
          />
          <Route path="/fuel" element={<Fuel />} />
        </Routes>
      </div>
    </>
  );
}
