import Sector from ".././charts/sectorDonutChart";
import DropDownMenu from "../component/dropdown";

export default function Overview(props) {
  return (
    <>
      <div className="d-flex  flex-column text-dark">
        <Sector sdata={props} />

        <div className="card m-4 p-2">
          <DropDownMenu />
        </div>
      </div>
    </>
  );
}
