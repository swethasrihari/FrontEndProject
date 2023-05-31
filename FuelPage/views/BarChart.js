//import "./styles.css";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale
// } from "chart.js";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../src/utils/chartColors";

const BarChart = () => {
  const [chart, setChart] = useState([]);
  // const [year, setYear] = useState([]);
  // const [emission, setEmission] = useState([]);
  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value";

  // let obj = [];

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
            // console.log(json.response.data);
            console.log(json.response);
            // obj.push(json.response.data);

            //after successful response
            // setChart(json.data);
            setChart(json.response.data);
            // setChart(json.response);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCO2Emissions();
  }, [baseUrl]);

  //console.log(chart);
  let amount = [];
  let year = [];
  chart.forEach((item) => {
    if (
      item.period >= 2015 &&
      item.period <= 2020 &&
      item.fuelId === "TO"
      // &&
      // item.stateId === "US"
    ) {
      amount.push(item.value);
      year.push(item.period);
    }
  });

  console.log(amount);

  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: year,
    // labels: chart?.response?.data?.map((x) => x.period),

    datasets: [
      {
        // label: `${chart?.response?.data?.length} CO2 Emissions`

        label: `CO2 Emissions`,
        // data: [12, 19, 3, 5, 2, 3],
        data: amount,
        // data: chart?.response?.data?.map((x) => x.value),
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        //   "rgba(255, 205, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(201, 203, 207, 0.2)"
        // ],
        // borderColor: [
        //   "rgb(255, 99, 132)",
        //   "rgb(255, 159, 64)",
        //   "rgb(255, 205, 86)",
        //   "rgb(75, 192, 192)",
        //   "rgb(54, 162, 235)",
        //   "rgb(153, 102, 255)",
        //   "rgb(201, 203, 207)"
        // ],
        backgroundColor: backgroundColors,
        borderColor: borderColors,

        borderWidth: 1
      }
    ]
  };
  return (
    <div>
      {/* <h1>Sources1</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}

      <Bar data={data} height={400} />
      {/* options = {options} */}
    </div>
  );
};
export default BarChart;
