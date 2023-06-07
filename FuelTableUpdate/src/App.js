import "./styles.css";

import BarChart from "./views/FuelBarChart";
import FuelTable from "./views/FuelTable";
import DisplayCarousel from "./views/CaraoselSlider";
// import LineChart from "../views/LineChart";
import TransportChart from "./views/TransportChart";
export default function App() {
  return (
    <div className="App">
      {/* <h1>Sources of Carbon Emission</h1> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <BarChart /> */}
      <BarChart />
      {/* <LineChart /> */}
      <FuelTable />
      <DisplayCarousel />
      <TransportChart />
    </div>
  );
}