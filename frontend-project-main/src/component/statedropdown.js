import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Page from "../component/page";
import { useState } from "react";

export default function StateDropDownMenu() {
  const [stateName, setStateName] = useState("");

  return (
    <>
      <label>
        Please choose State:{""}
        <select
          className="form-select"
          aria-label="Default select example"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        >
          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkanas</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District Of Columbia</option>
          <option value="DE">Delware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinios</option>
          <option value="IN">Indiana</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachuttes</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnasota</option>
          <option value="MO">Missouri</option>
          <option value="MS">Missisipi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New jersy</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahama</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennesse</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>
      </label>
      <p> You selected: {stateName} </p>
      <Page name={stateName} />
    </>
  );
}
