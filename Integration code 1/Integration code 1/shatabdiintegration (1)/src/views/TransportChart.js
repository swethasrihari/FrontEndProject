import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const TransportChart = () => {
  const [chart, setChart] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-and-carbon-coefficients/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=emissions&facets[sectorId][]=4";

  useEffect(() => {
    const fetchEmissions = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application-json"
        }
      })
        .then((response) => {
          response.json().then((json) => {
            setChart(json.response.data);
          });
        })
        .catch((error) => {
          setErrorMessage(error);
        });
    };
    fetchEmissions();
  }, [baseUrl, errorMessage]);

  let amountEm = [];
  let yearEm = [];
  let sortYearEm = [];
  chart.forEach((item) => {
    if (item.period > 2008 && item.period < 2023) {
      amountEm.push(item.emissions);
      yearEm.push(item.period);
      sortYearEm = yearEm.sort();
    }
  });

  const data = {
    labels: sortYearEm,
    datasets: [
      {
        label: "CO2 Emissions",
        data: amountEm,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <div className="card m-4">
        <div className="card-body">
          <div className="card-title">
            <h3>Transportation CO2 Emissions for most recent 5 years</h3>
            <Bar data={data} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransportChart;
