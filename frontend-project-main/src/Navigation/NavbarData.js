import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ChartIcon from "@material-ui/icons/InsertChart";
import ContactIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";

export const NavbarData = [
  {
    icon: <HomeIcon fontSize="large" />,
    title: "Home",
    link: "/"
  },
  {
    icon: <ChartIcon fontSize="large" />,
    title: "Charts",
    link: "/charts"
  },
  {
    icon: <ContactIcon fontSize="large" />,
    title: "Contact Us",
    link: "/contact"
  },

  {
    icon: <SettingsIcon fontSize="large" />,
    title: "Settings",
    link: "/settings"
  }
];
