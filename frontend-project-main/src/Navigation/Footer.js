import GithubLogo from "@mui/icons-material/GitHub";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="wrapper">
      <footer className="footer bg-dark text-light">
        <div className="row ">
          <div className="col text-center">
            <span className="copyright">
              &copy;carbondioxide2023
              <Link
                className="githubLogo"
                to="https://github.com/swethasrihari/FrontEndProject"
                target="_blank"
              >
                <GithubLogo />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
