import React from "react";
import "../App.css";
import { NavbarData } from "./NavbarData";
import Home from "../NavViews/Home";
import Charts from "../NavViews/Charts";
import Contact from "../NavViews/Contact";
import Settings from "../NavViews/Settings";
import { Routes, Route, Link } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function Navbar() {
  return (
    <div>
      <SideNav className="Navbar" select={(selected) => {}}>
        <Toggle className="Toggle" expanded />
        <Nav defaultSelected={<Home />}>
          {NavbarData.map((val, key) => {
            return (
              <NavItem className="NavItem">
                <NavIcon className="NavIcon">
                  <Link to={val.link} className="NavLink">
                    {val.icon}
                  </Link>
                </NavIcon>
                <NavText className="NavText">
                  <Link to={val.link} className="NavLink">
                    {val.title}
                  </Link>
                </NavText>
              </NavItem>
            );
          })}
        </Nav>
      </SideNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
export default Navbar;
