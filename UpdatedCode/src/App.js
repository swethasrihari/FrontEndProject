import "./styles.css";

import BarChart from "./views/FuelBarChart";
import FuelTable from "./views/FuelTable";
import DisplayCarousel from "./views/CaraoselSlider";
import TransportChart from "./views/TransportChart";
import PieChart from "./views/MinMax";
export default function App() {
  return (
    <div className="App">
      <BarChart />
      <FuelTable />
      <DisplayCarousel />
      <TransportChart />
      <PieChart />
    </div>
  );
}
