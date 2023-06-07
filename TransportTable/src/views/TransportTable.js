import { useEffect, useState } from "react";
import TransportData from "../components/TransportData";

export default function TransportTable() {
  const [transport, setTransport] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTransport = async () => {
      try {
        const response = await fetch(
          "https://api.eia.gov/v2/co2-emissions/co2-emissions-and-carbon-coefficients/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=emissions&facets[sectorId][]=4&facets[stateId][]=OR&start=2017"
        );
        const data = await response.json();
        setTransport(data.response.data);
      } catch (e) {
        setErrorMessage(e);
        console.log(errorMessage);
      }
    };
    // Call the function
    fetchTransport();
  }, [errorMessage]);

  return (
    <div className="Box">
      <h3>Most recent 2 years CO2 emission in Oregon</h3>
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
          <TransportData transport={transport} />
        </tbody>
      </table>
    </div>
  );
}
