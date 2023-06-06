import "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const TransportChart = () => {
  // const [transportChart, setTransportChart] = useState([]);
  // const [chart, setChart] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-and-carbon-coefficients/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=emissions&facets[sectorId][]=4";

  // useEffect(() => {
  //   const fetchEmissions = async () => {
  //     await fetch(`${baseUrl}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application-json"
  //       }
  //     })
  //       .then((response) => {
  //         response.json().then((json) => {
  //           console.log("Transport chart response", json);
  //           setTransportChart(json.response.data);
  //         });
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error);
  //         // console.log(error);
  //       });
  //   };
  //   fetchEmissions();
  // }, [baseUrl]);

  // let amountEm = [];
  // let yearEm = [];
  // transportChart.forEach((item) => {
  //   if (
  //     item.period >= 2014 &&
  //     item.period <= 2018
  //     // &&
  //     // item.fuelId === "TO"
  //     // && item.sectorId === "TT"
  //   ) {
  //     amountEm.push(item.emissions);
  //     yearEm.push(item.period);
  //   }
  // });
  // setup
  // const dataEm = {
  //   labels: yearEm,
  //   datasets: [
  //     {
  //       label: "Transport CO2 Emission",
  //       data: amountEm,
  //       fill: true,
  //       backgroundColor: backgroundColors,
  //       borderColor: borderColors,
  //       borderWidth: 1
  //     }
  //   ]
  // };

  let carbonEm = [];
  let year = [];

  const state = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    labels: year,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    // <div className="horizontalchart">
    //   <h2>Last 5 years CO2 emissions</h2>
    //   <HorizontalBar
    //     data={dataEm}
    //     // options={{
    //     //   maintainAspectRatio: true,
    //     //   title: {
    //     //     display: true,
    //     //     text: "Population of some cool cities",
    //     //     fontSize: 25
    //     //   },
    //     //   legend: {
    //     //     display: false
    //     //   }
    //     // }}
    //   />
    //   {/* <Bar data={data} height={400} /> */}
    // </div>
    <div>
      <h2>Line Chart Example</h2>
      <Line data={state} />
    </div>
  );
};
export default TransportChart;
