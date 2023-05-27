import Home from "../NavViews/Home";
import Chart from "../NavViews/Chart";
import Contact from "../NavViews/Contact";
import HomeIcon from "@material-ui/icons/Home";
import ChartIcon from "@material-ui/icons/InsertChart";
import ContactIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";

import "../App.css";

function Navbar() {
  return (
    <>
      <div className="d-flex align-items-start ">
        <div
          className="nav flex-column nav-pills me-3 align-items-start"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link text-light text-opacity-50 active my-2"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <HomeIcon />
            <span>Home</span>
          </button>
          <button
            className="nav-link text-light text-opacity-50 my-2 "
            id="v-pills-chart-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-chart"
            type="button"
            role="tab"
            aria-controls="v-pills-chart"
            aria-selected="false"
          >
            <ChartIcon />
            <span>Charts</span>
          </button>

          <button
            className="nav-link text-light text-opacity-50 my-2 "
            id="v-pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-contact"
            type="button"
            role="tab"
            aria-controls="v-pills-contact"
            aria-selected="false"
          >
            <ContactIcon />
            <span>Contact</span>
          </button>
          <button
            className="nav-link text-light text-opacity-50 my-2 "
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <SettingsIcon />
            <span>Settings</span>
          </button>
        </div>

        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <Home />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-chart"
            role="tabpanel"
            aria-labelledby="v-pills-chart-tab"
            tabindex="0"
          >
            <Chart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-contact"
            role="tabpanel"
            aria-labelledby="v-pills-contact-tab"
            tabindex="0"
          >
            <Contact />
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
            <main className="container">
              <div className="row">
                <div className="col">
                  <h1>Settings Page</h1>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
