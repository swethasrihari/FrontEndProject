import Mode from "../Utilities/Mode";
import Clock from "../Utilities/Clock";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="container-fluid ">
          <span className="navbar-brand bg-transparent text-light">
            CO2 Emissions
          </span>

          <span className="bg-transparent ">
            <Mode />
            <div className="Clock text-light">
              <Clock />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
