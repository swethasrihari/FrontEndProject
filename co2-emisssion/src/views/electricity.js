import ELineChart from ".././charts/electricityLineChart";
import StateDropDownMenu from "../component/statedropdown";

export default function Electricity(props) {
  return (
    <div className="d-flex flex-column text-dark">
      <div className="card m-4 p-2">
        <h4>Yearly Trends</h4>
        <ELineChart sdata={props} />
      </div>
      <div className="card m-4 p-2">
        <h4> Statewise CO2 Emission</h4>
        <StateDropDownMenu />
      </div>
    </div>
  );
}
