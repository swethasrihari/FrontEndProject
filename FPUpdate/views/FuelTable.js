import { useEffect, useState } from "react";
import FuelData from "../src/components/FuelData";
// import "./styles.css";

export default function FuelTable() {
  const [fuel, setFuel] = useState([]);

  useEffect(() => {
    const fetchFuel = async () => {
      try {
        const response = await fetch(
          "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value"
        );
        const data = await response.json();
        // if (data.length > 0) {
        setFuel(data.response.data);
        console.log("Table data is:", data.response.data);
        // }
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
      //use only 3 sample data
      // setFuel(data.slice(0, 3));
    };

    // Call the function
    fetchFuel();
  }, []);

  return (
    <div className="table-container">
      <h1>Tabular Data for Co2 emission</h1>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Sector</th>
            <th>Fuel</th>
            <th>State</th>
            <th>CO2</th>
          </tr>
        </thead>
        <tbody>
          {/* {fuel.map((fuel, key) => (
            <tr key={key}>
              <td className="table-data">{fuel.period}</td>
              <td className="table-data">{fuel.sectorId}</td>
              <td className="table-data">{fuel.fuelId}</td>
              <td className="table-data">{fuel.stateId}</td>
              <td className="table-data">{fuel.value}</td>
              <td className="table-data">
                <img
                  width="20px"
                  height="10px"
                  src={fuel.media.flag}
                  alt="flag"
                /> 
              </td>
            </tr>
          ))} */}
          {/* create a component */}
          <FuelData fuel={fuel} />
        </tbody>
      </table>
    </div>
  );
}
