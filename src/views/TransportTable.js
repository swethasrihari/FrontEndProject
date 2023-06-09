import { useEffect, useState, useContext } from "react";
import TransportData from "../component/TransportData";
import "../styles.css";
import { ModeContext } from "../App";

export default function TransportTable() {
  const mode = useContext(ModeContext);
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
    <div className={`bg-${mode.bg} text-${mode.text} card m-4 p-3`}>
      <div className="card-body">
        <div className="card-title text-center">
          <h5>
            CO2 emissions by Fuel product in Oregon for most recent 2 years
          </h5>
          <table className="m-0">
            <thead>
              <tr>
                <th>Year</th>
                <th>Fuel Product</th>
                <th>Carbon Emission (mmt)</th>
              </tr>
            </thead>
            <tbody>
              {/* create a component */}
              <TransportData transport={transport} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
