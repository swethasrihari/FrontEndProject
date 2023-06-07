import { useContext } from "react";
import { ModeContext } from "../App";

export default function Settings() {
  const mode = useContext(ModeContext);
  return (
    <main className="settingsContainer">
      <div className="row">
        <div className="col">
          <div className={`card bg-${mode.bg} text-${mode.text}`}>
            <div className="card-body">
              <h1>Settings page</h1>
              <p>This page is under construction...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
