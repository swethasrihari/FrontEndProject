// import "chart.js/auto";
// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { backgroundColors, borderColors } from "../utils/chartColors";

// const BarChart = () => {
//   const [chart, setChart] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const baseUrl =
//     "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&facets[stateId][]=US&data[]=value";

//   useEffect(() => {
//     const fetchCO2Emissions = async () => {
//       await fetch(`${baseUrl}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application-json"
//         }
//       })
//         .then((response) => {
//           response.json().then((json) => {
//             //console.log(json);
//             setChart(json.response.data);
//           });
//         })
//         .catch((error) => {
//           setErrorMessage(error);
//           console.log(errorMessage);
//         });
//     };
//     fetchCO2Emissions();
//   }, [baseUrl, errorMessage]);

//   let amount = [];
//   let year = [];
//   chart.forEach((item) => {
//     if (
//       item.period >= 2015 &&
//       item.period <= 2020 &&
//       item.fuelId === "TO" &&
//       item.sectorId === "TT"
//     ) {
//       amount.push(item.value);
//       year.push(item.period);
//     }
//   });

//   const data = {
//     labels: year,

//     datasets: [
//       {
//         label: `CO2 Emissions from Fuel`,

//         data: amount,

//         backgroundColor: backgroundColors,
//         borderColor: borderColors,

//         borderWidth: 1
//       }
//     ]
//   };
//   return (
//     <div className="barchart">
//       <div className="card m-4">
//         {" "}
//         <div className="card-body">
//           <div className="card-title">
//             <h2>Last 5 years CO2 emissions</h2>

//             <Bar data={data} options={{ responsive: true, aspectRatio: 1.7 }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BarChart;
import "chart.js/auto";
import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ModeContext } from "../App";
import { backgroundColors, borderColors } from "../utils/chartColors";

const BarChart = () => {
  const mode = useContext(ModeContext);

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
        label: "CO2 Emissions",
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
      // ,
      // {
      //   label: "dataset2",
      //   data: amount,
      //   backgroundColor: "rgba(255, 159, 64, 0.2)",
      //   borderColor: "rgb(255, 159, 64)",
      //   borderWidth: 1
      // },
      // {
      //   label: "dataset3",
      //   data: amount,
      //   backgroundColor: "rgba(255, 205, 86, 0.2)",
      //   borderColor: "rgb(255, 205, 86)",
      //   borderWidth: 1
      // },
      // {
      //   label: "dataset4",
      //   data: amount,
      //   backgroundColor: "rgba(75, 192, 192, 0.2)",
      //   borderColor: "rgb(75, 192, 192)",
      //   borderWidth: 1
      // },
      // {
      //   label: "dataset5",
      //   data: amount,
      //   backgroundColor: "rgba(54, 162, 235, 0.2)",
      //   borderColor: "rgb(54, 162, 235)",
      //   borderWidth: 1
      // },
      // {
      //   label: "dataset6",
      //   data: amount,
      //   backgroundColor: "rgba(153, 102, 255, 0.2)",
      //   borderColor: "rgb(153, 102, 255)",
      //   borderWidth: 1
      // },
      // {
      //   label: "dataset7",
      //   data: amount,
      //   backgroundColor: "rgba(201, 203, 207, 0.2)",
      //   borderColor: "rgb(201, 203, 207)",
      //   borderWidth: 1
      // }
    ]
  };

  return (
    <div className="barchart">
      <div className={`card bg-${mode.bg} text-${mode.text}`}>
        <div className="card-body">
          <div className="card-title">
            <h3>Sectorwise CO2 emissions for the most recent 5 years</h3>
            <Bar data={data} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarChart;
