import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundColors, borderColors } from "../utils/chartColors";

const BarChart = () => {
  const [chart, setChart] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=29TYpqceK8M5v5YN9wc919BanZ4LMogwwDKwJIXL&data[]=value&facets[fuelId][]=TO&facets[sectorId][]=CC&facets[sectorId][]=EC&facets[sectorId][]=IC&facets[sectorId][]=RC&facets[sectorId][]=TC&facets[stateId][]=OR";

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
  let sectorArray = [];
  let startYear = 2016;
  let endYear = 2020;
  let yearArr = endYear - startYear + 1;

  chart.forEach((item) => {
    if (item.period >= startYear && item.period <= endYear) {
      amount.push(item.value);
      year.push(item.period);
      sortYear = year.sort();
      sectorArray.push(item.sectorId);
    }
  });

  function evaluateOutput(sectorArray, amount, yearArr) {
    const sectIdNames = ["CC", "IC", "TC", "EC", "RC"];

    let len = sectorArray.length;
    let findLen = [];

    const R = sectIdNames.length;
    const C = yearArr;
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
        if (sectIdNames[j] === sectorArray[i]) {
          arr[j][findLen[j]] = amount[i];
          findLen[j] = findLen[j] + 1;
        }
      }
    }

    return arr;
  }

  let callFunc = evaluateOutput(sectorArray, amount, yearArr);

  const sectorNames = [
    "Commercial carbon dioxide emissions",
    "Industrial carbon dioxide emissions",
    "Transportation carbon dioxide emissions",
    "Electric Power carbon dioxide emissions",
    "Residential carbon dioxide emissions"
  ];
  //const sectIdNames = ["CC", "IC", "TC", "EC", "RC"];

  //function to map sector id
  function uniqueYearFunc(sortYear) {
    const newArr = [];
    // const sectorDefine = [];

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

  let newVariable = uniqueYearFunc(sortYear);

  const data = {
    labels: newVariable,
    datasets: [
      {
        label: sectorNames[0],
        data: callFunc[0],
        backgroundColor: "green",
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: sectorNames[1],
        data: callFunc[1],
        backgroundColor: "lightskyblue",
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: sectorNames[2],
        data: callFunc[2],
        backgroundColor: "orange",
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: sectorNames[3],
        data: callFunc[3],
        backgroundColor: "plum",
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: sectorNames[4],
        data: callFunc[4],
        backgroundColor: "mediumorchid",
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="barchart">
      <div className="card-body">
        <div className="card-title text-center">
          <h5>Total carbon emissions over recent 5 years</h5>
          <Bar data={data} options={{ aspectRatio: 1.6 }} />
        </div>
      </div>
    </div>
  );
};
export default BarChart;
