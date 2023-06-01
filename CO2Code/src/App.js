import "./styles.css";

import BarChart from "../views/FuelBarChart";
import FuelTable from "../views/FuelTable";
import CarbonChart from "../views/CarbonChart";

export default function App() {
  return (
    <div className="App">
      <BarChart />
      <FuelTable />
      <CarbonChart />
    </div>
  );
}
