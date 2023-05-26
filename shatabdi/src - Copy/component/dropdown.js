// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Table from "../component/tabulardata";
import { useState } from "react";
export default function DropDownMenu() {
  const [year, setYear] = useState("");

  return (
    <>
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
          <option value="2021">2021</option>
        </select>
      </label>
      <p> You selected: {year} </p>
      <Table year={year} />
    </>
  );
}
