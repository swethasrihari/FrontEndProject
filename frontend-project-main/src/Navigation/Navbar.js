import Home from "../NavViews/Home";
import Chart from "../NavViews/Chart";
import Contact from "../NavViews/Contact";
import Gallery from "../NavViews/Gallery";
import Settings from "../NavViews/Settings";
import HomeIcon from "@material-ui/icons/Home";
import ChartIcon from "@material-ui/icons/InsertChart";
import ContactIcon from "@material-ui/icons/Mail";
import GalleryIcon from "@mui/icons-material/Collections";
import SettingsIcon from "@material-ui/icons/Settings";
//import treeImage from "../Images/treesImage.jpeg";

//import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../App.css";
//import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <img className="bgImage" src={treeImage} alt="Background trees" />*/}

      <div className="navContainer d-flex align-items-start ">
        <div
          className="nav flex-column bg-transparent nav-pills me-3 align-items-start"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="btn  text-light active my-2 mx-3"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <span className="icon mx-1">
              <HomeIcon />
            </span>
            <span className="title mx-1">Home</span>
          </button>
          <button
            className="btn text-light my-2 mx-3"
            id="v-pills-chart-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-chart"
            type="button"
            role="tab"
            aria-controls="v-pills-chart"
            aria-selected="false"
          >
            <span className="icon mx-1">
              <ChartIcon />
            </span>
            <span className="title mx-1">Sources</span>
          </button>

          <button
            className="btn text-light my-2 mx-3"
            id="v-pills-gallery-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-gallery"
            type="button"
            role="tab"
            aria-controls="v-pills-gallery"
            aria-selected="false"
          >
            <GalleryIcon />
            <span className="mx-1" />
            Gallery
          </button>
          <button
            className="btn text-light my-2 mx-3"
            id="v-pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-contact"
            type="button"
            role="tab"
            aria-controls="v-pills-contact"
            aria-selected="false"
          >
            <ContactIcon />
            <span className="mx-1" />
            Contact
          </button>
          <button
            className="btn text-light my-2 mx-3"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <span className="icon mx-1">
              <SettingsIcon />
            </span>
            <span className="title mx-1">Settings</span>
          </button>
        </div>

        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabIndex="0"
          >
            <Home />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-chart"
            role="tabpanel"
            aria-labelledby="v-pills-chart-tab"
            tabIndex="0"
          >
            <Chart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-contact"
            role="tabpanel"
            aria-labelledby="v-pills-contact-tab"
            tabIndex="0"
          >
            <Contact />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-gallery"
            role="tabpanel"
            aria-labelledby="v-pills-gallery-tab"
            tabIndex="0"
          >
            <Gallery />
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabIndex="0"
          >
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
