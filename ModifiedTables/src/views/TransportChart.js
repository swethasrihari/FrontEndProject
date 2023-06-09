import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const TransportChart = () => {
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

  chart.forEach((item) => {
    if (item.period >= 2014 && item.period <= 2018) {
      amountEm.push(item.emissions);
      yearEm.push(item.period);
      sortYearEm = yearEm.sort();
      fuelArray.push(item.fuelId);
    }
  });

  function uniqueArr(fuelArray) {
    const myArray = [];
    const names = [];
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
    const fuelNum = [1, 6, 9, 11, 12, 14, 15, 16, 19];

    let k = 0;
    let len = fuelArray.length;
    for (let i = 0; i < len; i++) {
      let temp = 0;
      for (let j = 0; j < k; j++) {
        if (fuelArray[i] === myArray[j]) {
          temp = 1;
        }
      }
      if (temp === 0) {
        myArray[k] = fuelArray[i];
        k = k + 1;
      }
    }
    for (let l = 0; l < k; l++) {
      for (let m = 0; m < k; m++) {
        if (myArray[l] === fuelNum[m]) {
          names[l] = fuelName[m];
        }
      }
    }

    return names;
  }

  let diffValues = [];
  diffValues = uniqueArr(fuelArray);

  const data = {
    labels: sortYearEm,
    datasets: [
      {
        label: diffValues[0],
        data: amountEm,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[1],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[2],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[3],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[4],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[5],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[6],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffValues[8],
        data: amountEm[1],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <div className="card-body">
        <div className="card-title text-center">
          <h5>Types of Fuel emissions in Transport sector for Oregon</h5>
          <Bar data={data} height={200} />
        </div>
      </div>
    </div>
  );
};
export default TransportChart;
