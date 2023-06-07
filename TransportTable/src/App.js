import "./styles.css";

import BarChart from "./views/FuelBarChart";
import FuelTable from "./views/FuelTable";
import DisplayCarousel from "./views/CaraoselSlider";
import TransportChart from "./views/TransportChart";
// import PieChart from "./views/MinMax";
import TransportTable from "./views/TransportTable";
export default function App() {
  return (
    <div className="App">
      <BarChart />
      <FuelTable />
      <DisplayCarousel />
      <TransportChart />
      {/* <PieChart /> */}
      <TransportTable />
    </div>
  );
}
