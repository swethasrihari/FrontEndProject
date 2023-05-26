import ELineChart from ".././charts/electricityLineChart";
//import ETable from "../component/electricityTable";
import Page from "../component/page";

export default function Electricity(props) {
  return (
    <div className="d-flex flex-column text-dark">
      <div className="p-2 m-2 border border-primary">
        <h3>Yearly Trends</h3>
        <ELineChart sdata={props} />
      </div>
      <div className="p-2 m-2 border border-primary bg-info bg-gradient">
        <h3> Yearly Emission </h3>
        <Page />
      </div>
    </div>
  );
}
