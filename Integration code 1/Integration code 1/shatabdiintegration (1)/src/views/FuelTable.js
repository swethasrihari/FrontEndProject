import { useEffect, useState } from "react";
import FuelData from "../component/FuelData";
import "../styles.css";

export default function FuelTable() {
  const [fuel, setFuel] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFuel = async () => {
      try {
        const response = await fetch(
          "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value&start=2015"
        );
        const data = await response.json();
        setFuel(data.response.data);
      } catch (e) {
        setErrorMessage(e);
        console.log(errorMessage);
      }
    };
    // Call the function
    fetchFuel();
  }, [errorMessage]);

  return (
    <div className="card m-4">
      <div className="card-body">
        <div className="card-title">
          <h2>Yearly CO2 emission in US</h2>
          <table className="m-0">
            <thead>
              <tr>
                <th>Year</th>
                <th>Fuel Name</th>
                <th>Carbon Emission (million metric tons)</th>
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
