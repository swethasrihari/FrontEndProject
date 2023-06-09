import ELineChart from ".././charts/electricityLineChart";
import StateDropDownMenu from "../component/statedropdown";
import React, { useContext } from "react";
import { ModeContext } from "../App";

export default function Electricity(props) {
  const mode = useContext(ModeContext);
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <div
          className={`card bg-${mode.bg} text-${mode.text} shadow mx-5 my-3`}
        >
          <h4>5 Years trends for Electricity</h4>
          <ELineChart sdata={props} />
        </div>
        <div
          className={`card bg-${mode.bg} text-${mode.text} shadow mx-5 my-3`}
        >
          <h4> Statewise CO2 Emission</h4>

          <StateDropDownMenu />
        </div>
      </div>
    </>
  );
}
