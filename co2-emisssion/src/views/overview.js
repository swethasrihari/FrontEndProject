import Sector from ".././charts/sectorDonutChart";
import DropDownMenu from "../component/dropdown";

export default function Overview(props) {
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <Sector sdata={props} />
      </div>
      <div className="d-flex flex-column text-dark">
        <div className="p-2 m-2 border border-primary bg-info bg-gradient">
          <DropDownMenu />
        </div>
      </div>
    </>
  );
}
