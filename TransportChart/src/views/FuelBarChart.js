import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const BarChart = () => {
  const [chart, setChart] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value";

  useEffect(() => {
    const fetchCO2Emissions = async () => {
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
    fetchCO2Emissions();
  }, [baseUrl, errorMessage]);

  let amount = [];
  let year = [];
  let sortYear = [];
  chart.forEach((item) => {
    if (item.period >= 2015 && item.period <= 2020 && item.fuelId === "TO") {
      amount.push(item.value);
      year.push(item.period);
      sortYear = year.sort();
    }
  });

  const data = {
    labels: sortYear,
    datasets: [
      {
        label: `CO2 Emissions from Fuel`,
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <h3>Sectorwise CO2 emissions for the most recent 5 years</h3>
      <Bar data={data} height={400} />
    </div>
  );
};
export default BarChart;
