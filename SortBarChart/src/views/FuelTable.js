import { useEffect, useState } from "react";
import FuelData from "../components/FuelData";
// import "./styles.css";

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
        // console.log("Table data is:", data.response.data);
      } catch (e) {
        // console.log(e);
        setErrorMessage(e);
      }
    };
    // Call the function
    fetchFuel();
  }, []);

  return (
    <div class="container ">
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>Yearly CO2 emission in US</h2>
          <input
            class="searchBar"
            type="text"
            placeholder="Search here"
            //  onChange={handleChange}
            //  value={searchInput}
          />
          <table class="m-0">
            <thead>
              <tr>
                <th>Year</th>
                <th>Sector</th>
                <th>Sector Name</th>
                <th>Fuel</th>
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
