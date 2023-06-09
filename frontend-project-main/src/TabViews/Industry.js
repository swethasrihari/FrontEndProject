import React, { useState, useContext } from "react";
import { ModeContext } from "../App";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import IndustryFetch from "../Utilities/IndustryFetch";
import IndustryTable from "../Utilities/IndustryTable";

export default function Industry() {
  const mode = useContext(ModeContext);

  const industryData = IndustryFetch();
  const [inputState, setInputState] = useState("OR");
  let dataArray = [];
  industryData.map((row) => {
    const { period, sectorId, fuelId } = row;
    if (sectorId === "IC" && period >= 2015 && fuelId === "TO") {
      return dataArray.push(row);
    } else return "";
  });
  let stateMap = new Map();
  dataArray.map((item) => {
    const stateId = item.stateId.toString();
    const stateName = item["state-name"];
    if (stateMap.has(stateId) === false) {
      return stateMap.set(stateId, stateName);
    } else return "";
  });

  const keyValues = IndustryStateData(dataArray);

  let keys = [];
  let values = [];
  let i = 0;
  for (let [key, value] of keyValues) {
    keys[i] = key;
    values[i] = value;
    i = i + 1;
  }

  const years = [2017, 2018, 2019, 2020];
  let emission = [];
  dataArray.map((row) => {
    if (row.stateId === inputState) emission.push(row.value);
    else return "";
  });
  const data = {
    labels: years,
    datasets: [
      {
        axis: "y",
        label: `Industry CO2 data for the state of ${inputState}`,
        data: emission,
        fill: true,
        borderColor: "#54B4D3",
        backgroundColor: "#54B4D3",
        tension: 0.1
      }
    ]
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <div
            className={`card bg-${mode.bg} text-${mode.text} shadow mx-5 my-3 `}
          >
            <div className="my-3 mx-5">
              <label forhtml="stateDropDown" className="text-center">
                Select State
              </label>
              <span className="mx-3" />
              <select
                id="stateDropDown"
                className="text-center"
                onChange={(e) => {
                  setInputState(e.target.value);
                }}
              >
                <option defaultValue>Choose a state</option>

                {Array.from(stateMap).map((item) => {
                  return (
                    <option key={item[0]} value={item[0]}>
                      {item[1]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              {" "}
              <Line data={data} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div
                className={`card bg-${mode.bg} text-${mode.text} shadow my-3`}
              >
                <IndustryTable input={inputState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function IndustryStateData(data) {
  let stateMap = new Map();
  data.map((row) => {
    if (stateMap.has(row.stateId) === false)
      return stateMap.set(row.stateId, row["state-name"]);
    else return "";
  });

  return stateMap;
}
