import ELineChart from ".././charts/electricityLineChart";
import StateDropDownMenu from "../component/statedropdown";

export default function Electricity(props) {
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <div className="electricity card m-4 p-3">
          <h4>5 Years trends for Electricity</h4>
          <ELineChart sdata={props} />
        </div>
        <div className="card m-4 p-3">
          <h4> Statewise CO2 Emission</h4>

          <StateDropDownMenu />
        </div>
      </div>
    </>
  );
}
