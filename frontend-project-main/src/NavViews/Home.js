import GeoChart from "../charts/geoChart";
import React, { useEffect, useState } from "react";
import HomeSlider from "../Utilities/HomeSlider";
export default function Home() {
  const [allData, setAllData] = useState([]);

  let url =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&frequency=annual&data[]=value&start=2020";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.response.data);
        setAllData(data.response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return (
    <div className="d-flex flex-column">
      <div className="row">
        <div className="col">
          <div className="card shadow my-3 mx-5">
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
              <div className="card-footer">
                <GeoChart data={allData} />
              </div>
            </div>
          </div>
        </div>
        {/*<div className="col">
          <div className="globe"></div>
  </div>*/}
        <div
          className="col"
          style={{ display: "block", width: 500, height: 30, padding: 30 }}
        >
          <HomeSlider />
        </div>
      </div>
    </div>
  );
}
