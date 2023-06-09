import "chart.js/auto";
import React, { useEffect, useState } from "react";
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
  let sectorArray = [];

  chart.forEach((item) => {
    if (item.period >= 2016 && item.period <= 2020 && item.fuelId === "TO") {
      amount.push(item.value);
      year.push(item.period);
      sortYear = year.sort();
      sectorArray.push(item.sectorId);
      // console.log("Sector types", sectorArray);
    }
  });

  //function to map sector id
  function sectorCategory(sectorArray) {
    const newArr = [];
    const sectorDefine = [];
    const sectorNames = [
      "Commercial carbon dioxide emissions",
      "Industrial carbon dioxide emissions",
      "Transportation carbon dioxide emissions",
      "Electric Power carbon dioxide emissions",
      "Residential carbon dioxide emissions",
      "Total carbon dioxide emissions from all sectors"
    ];
    const sectIdNames = ["CC", "IC", "TC", "EC", "RC", "TT"];

    let k = 0;
    let len = sectorArray.length;
    for (let i = 0; i < len; i++) {
      let temp = 0;
      for (let j = 0; j < k; j++) {
        if (sectorArray[i] === newArr[j]) {
          temp = 1;
        }
      }
      if (temp === 0) {
        newArr[k] = sectorArray[i];
        k = k + 1;
      }
    }
    for (let l = 0; l < k; l++) {
      for (let m = 0; m < k; m++) {
        if (newArr[l] === sectIdNames[m]) {
          sectorDefine[l] = sectorNames[m];
        }
      }
    }

    return sectorDefine;
  }

  let diffResult = [];
  diffResult = sectorCategory(sectorArray);

  const data = {
    labels: sortYear,
    datasets: [
      {
        // label: `CO2 Emissions trends from Fuel`,
        label: diffResult[0],
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffResult[1],
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffResult[2],
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffResult[3],
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffResult[4],
        data: amount,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      },
      {
        label: diffResult[5],
        data: amount,
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
          <h5>Total carbon emissions over recent 5 years</h5>
          <Bar data={data} options={{ aspectRatio: 1.6 }} />
        </div>
      </div>
    </div>
  );
};
export default BarChart;
