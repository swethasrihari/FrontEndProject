import { useEffect, useState, useContext } from "react";
import FuelData from "../component/FuelData";
import "../styles.css";
import { ModeContext } from "../App";

export default function FuelTable() {
  const mode = useContext(ModeContext);

  const [fuel, setFuel] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFuel = async () => {
      try {
        const response = await fetch(
          "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value&facets[fuelId][]=CO&facets[fuelId][]=NG&facets[fuelId][]=PE&start=2016"
        );
        const data = await response.json();
        setFuel(data.response.data);
      } catch (e) {
        setErrorMessage(e);
        console.log(errorMessage);
      }
    };
    fetchFuel();
  }, [errorMessage]);

  return (
    <div className={`bg-${mode.bg} text-${mode.text} card m-4 p-3`}>
      <div className="card-body">
        <div className="card-title text-center">
          <h5>CO2 emissions in US based on Fuel types over recent 5 years</h5>
          <table className="m-0">
            <thead>
              <tr>
                <th>Year</th>
                <th>Fuel Name</th>
                <th>Carbon Emission (mmt)</th>
              </tr>
            </thead>
            <tbody>
              {/* create a component */}
              <FuelData fuel={fuel} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
