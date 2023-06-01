import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../src/utils/chartColors";

const BarChart = () => {
  const [chart, setChart] = useState([]);

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
            console.log(json);

            setChart(json.response.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCO2Emissions();
  }, [baseUrl]);

  let amount = [];
  let year = [];
  chart.forEach((item) => {
    if (
      item.period >= 2015 &&
      item.period <= 2020 &&
      item.fuelId === "TO" &&
      item.sectorId === "TT"
    ) {
      amount.push(item.value);
      year.push(item.period);
    }
  });

  const data = {
    labels: year,

    datasets: [
      {
        label: `CO2 Emissions`,

        data: amount,

        backgroundColor: backgroundColors,
        borderColor: borderColors,

        borderWidth: 1
      }
    ]
  };
  return (
    <div class="barchart">
      <h2>Last 5 years CO2 emissions</h2>
      <Bar data={data} height={400} />
    </div>
  );
};
export default BarChart;
