import Sector from ".././charts/sectorDonutChart";
import DropDownMenu from "../component/dropdown";

export default function Overview(props) {
  return (
    <>
      <div className="d-flex flex-column text-dark items-center">
        <Sector sdata={props} />
      </div>

      <DropDownMenu />
    </>
  );
}
