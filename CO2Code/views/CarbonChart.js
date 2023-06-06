import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../src/utils/chartColors";

const CarbonChart = () => {
  const [carbon, setCarbon] = useState([]);

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-and-carbon-coefficients/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[0]=emissions";

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
            // console.log(json);
            console.log(json.response.data);

            setCarbon(json.response.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCO2Emissions();
  }, [baseUrl]);

  const data = {
    // labels: year,

    datasets: [
      {
        label: `CO2 Emissions`,

        // data: amount,

        backgroundColor: backgroundColors,
        borderColor: borderColors,

        borderWidth: 1
      }
    ]
  };
  return (
    <div class="polarAreaChart">
      <Bar data={data} height={400} />
    </div>
  );
};
export default CarbonChart;
