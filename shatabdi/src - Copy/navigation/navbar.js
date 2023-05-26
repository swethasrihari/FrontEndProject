import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <ul className="nav justify-content">
        <li className="nav-item">
          <Link to="/overview" className="nav-link text-dark fs-3 text">
            Overview
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/electricity" className="nav-link text-dark fs-3 text">
            Electricity
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/fuel" className="nav-link text-dark fs-3 text">
            Fuel
          </Link>
        </li>
      </ul>
    </nav>
  );
}
