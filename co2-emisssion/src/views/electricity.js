import ELineChart from ".././charts/electricityLineChart";
import StateDropDownMenu from "../component/statedropdown";

export default function Electricity(props) {
  return (
    <div className="d-flex flex-column text-dark">
      <div className="p-2 m-2 border border-primary">
        <h3>Yearly Trends</h3>
        <ELineChart sdata={props} />
      </div>
      <div className="p-2 m-2 border border-primary bg-info bg-gradient">
        <h3> Statewise CO2 Emission</h3>
        <StateDropDownMenu />
      </div>
    </div>
  );
}
