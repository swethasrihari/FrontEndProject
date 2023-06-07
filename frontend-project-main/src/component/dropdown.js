import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import OverviewPage from "../component/overviewpage";
import { useState, useContext } from "react";
import { ModeContext } from "../App";

export default function DropDownMenu() {
  const mode = useContext(ModeContext);

  const [year, setYear] = useState("");

  return (
    <div className={`card bg-${mode.bg} text-${mode.text} m-4 p-3`}>
      <label>
        Please choose year:{""}
        <select
          className="form-select"
          aria-label="Default select example"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
      </label>
      <h4 className="mt-2"> You selected: {year} </h4>
      <OverviewPage year={year} />
    </div>
  );
}
