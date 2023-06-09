import "chart.js/auto";
import { useEffect, useState } from "react";
const baseUrl =
  "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=value&facets[stateId][]=OR";

const getMax = async () => {
  const fetchEmissions = async () => {
    await fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json"
      }
    })
      .then((response) => {
        response.json().then((json) => {
          //  setChart(json.response.data);
          console.log(json.response.data);
          console.log("Maximum fetched");
        });
      })
      .catch((error) => {
        // setErrorMessage(error);
        console.log(error);
      });
  };
  fetchEmissions();
  // }, [baseUrl, errorMessage]);
};

const PieChart = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {}, []);

  const onClickHandler = async () => {
    const chart = await getMax();
    setChart(chart);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Show Maximum</button>
      <span>{chart}</span>
    </div>
  );
};
export default PieChart;
