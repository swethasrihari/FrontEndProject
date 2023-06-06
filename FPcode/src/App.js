import "./styles.css";

import BarChart from "../views/BarChart";
import LineChart from "../views/LineChart";

export default function App() {
  return (
    <div className="App">
      <h1>Sources of Carbon Emission</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <BarChart /> */}
      <BarChart />
      <LineChart />
    </div>
  );
}
