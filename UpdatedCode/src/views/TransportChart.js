import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const TransportChart = () => {
  const [chart, setChart] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

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
            setIsLoaded(true);
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
        label: "Yearly CO2 Emissions from Transport",
        data: amountEm,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <h3>Transportation CO2 Emissions for most recent 5 years</h3>
      {!isLoaded && <div>Loading...</div>}
      <Bar data={data} />
    </div>
  );
};
export default TransportChart;
