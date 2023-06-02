import Mode from "../Utils/Mode";

export default function Header() {
  return (
    <div>
      <div className="navbar ">
        <div className="container-fluid ">
          <span className="navbar-brand bg-transparent text-light">
            CO2 Emissions Dashboard
          </span>
          <span className="bg-transparent text-light">
            <Mode />
          </span>
        </div>
      </div>
    </div>
  );
}
