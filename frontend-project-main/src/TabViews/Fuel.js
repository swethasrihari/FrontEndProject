import BarChart from "../views/FuelBarChart";
import FuelTable from "../views/FuelTable";

export default function Fuel() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <BarChart />
          <FuelTable />
        </div>
      </div>
    </main>
  );
}
