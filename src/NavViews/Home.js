import GeoChart from "../charts/geoChart";
import React, { useEffect, useState, useContext } from "react";
import { ModeContext } from "../App";

export default function Home() {
  const mode = useContext(ModeContext);
  const [allData, setAllData] = useState([]);

  let url =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&frequency=annual&data[]=value&start=2020";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data.response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return (
    <div className="d-flex flex-column">
      <div className="row">
        <div className="col-9">
          <div
            className={`card bg-${mode.bg} text-${mode.text} shadow mx-5 my-3`}
          >
            <div className="card-body">
              <div className="card-title">
                <h2>What's this about?</h2>
              </div>
              <div className="card-text">
                Carbon dioxide(CO2) is a major contributor of green house gases
                which in turn is a leading factor for global warming. Reducing
                the emission of CO2 will be instrumental in reducing the global
                warming. CO2 is emmited from various sources such as
                electricity, transportation.. Here we have created a CO2
                emissions dashboard for electricity and fuel which uses CO2
                emission data from EAI (U.S.Energy Information Administration)
                API.
              </div>
              <div className="card-footer text-center">
                <GeoChart data={allData} />
              </div>
            </div>
          </div>
        </div>
        <div className="col my-5">
          <div className="globe"></div>
        </div>
      </div>
    </div>
  );
}
