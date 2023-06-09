import "chart.js/auto";
import React, { useEffect, useState, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ModeContext } from "../App";

const TransportChart = () => {
  const mode = useContext(ModeContext);
  const [chart, setChart] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-and-carbon-coefficients/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=emissions&facets[sectorId][]=4&facets[stateId][]=OR";

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
  let fuelArray = [];
  let startYear = 2016;
  let endYear = 2020;
  let yearRange = endYear - startYear + 1;

  chart.forEach((item) => {
    if (item.period >= startYear && item.period <= endYear) {
      amountEm.push(item.emissions);
      yearEm.push(item.period);
      sortYearEm = yearEm.sort();
      fuelArray.push(item.fuelId);
    }
  });
  const fuelName = [
    "residential",
    "natural gas",
    "avaiation gasoline",
    "distillate fuel",
    "jet fuel",
    "lpg",
    "lubricants",
    "motor gasoline",
    "residual fuel"
  ];

  function evaluateOutput(fuelArray, amountEm, yearRange) {
    const fuelNum = [1, 6, 9, 11, 12, 14, 15, 16, 19];

    let len = fuelArray.length;
    let findLen = [];

    const R = fuelNum.length;
    const C = yearRange;
    const val = 0;

    let arr = [];

    for (let i = 0; i < R; i++) {
      arr[i] = [];

      for (let j = 0; j < C; j++) {
        arr[i][j] = val;
        findLen[i] = 0;
      }
    }

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < R; j++) {
        if (fuelNum[j] === fuelArray[i]) {
          arr[j][findLen[j]] = amountEm[i];
          findLen[j] = findLen[j] + 1;
        }
      }
    }

    return arr;
  }

  let callFunc = evaluateOutput(fuelArray, amountEm, yearRange);

  function uniqueYearFunc(sortYear) {
    const newArr = [];

    let k = 0;
    let len = sortYear.length;
    for (let i = 0; i < len; i++) {
      let temp = 0;
      for (let j = 0; j < k; j++) {
        if (sortYear[i] === newArr[j]) {
          temp = 1;
        }
      }
      if (temp === 0) {
        newArr[k] = sortYear[i];
        k = k + 1;
      }
    }

    return newArr;
  }

  let newVariable = uniqueYearFunc(sortYearEm);

  const data = {
    labels: newVariable,
    datasets: [
      {
        label: fuelName[0],
        data: callFunc[0],
        backgroundColor: "aqua",
        borderColor: "aqua",
        borderWidth: 1
      },
      {
        label: fuelName[1],
        data: callFunc[1],
        backgroundColor: "teal",
        borderColor: "teal",
        borderWidth: 1
      },
      {
        label: fuelName[2],
        data: callFunc[2],
        backgroundColor: "khaki",
        borderColor: "khaki",
        borderWidth: 1
      },
      {
        label: fuelName[3],
        data: callFunc[3],
        backgroundColor: "coral",
        borderColor: "coral",
        borderWidth: 1
      },
      {
        label: fuelName[4],
        data: callFunc[4],
        backgroundColor: "gold",
        borderColor: "gold",
        borderWidth: 1
      },
      {
        label: fuelName[5],
        data: callFunc[5],
        backgroundColor: "greenyellow",
        borderColor: "greenyellow",
        borderWidth: 1
      },
      {
        label: fuelName[6],
        data: callFunc[6],
        backgroundColor: "mediumorchid",
        borderColor: "mediumorchid",
        borderWidth: 1
      },
      {
        label: fuelName[7],
        data: callFunc[7],
        backgroundColor: "lightskyblue",
        borderColor: "lightskyblue",
        borderWidth: 1
      },
      {
        label: fuelName[8],
        data: callFunc[8],
        backgroundColor: "royalblue",
        borderColor: "royalblue",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <div className={`card bg-${mode.bg} text-${mode.text} m-4`}>
        <div className="card-body">
          <div className="card-title text-center">
            <h5>Types of Fuel emissions in Transport sector for Oregon</h5>
            <Bar data={data} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransportChart;
