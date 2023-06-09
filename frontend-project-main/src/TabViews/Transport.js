import TransportChart from "../views/TransportChart";
import TransportTable from "../views/TransportTable";

export default function Transport() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {/* <div className="card">
            <div className="card-body"> */}
          <TransportChart />
          <TransportTable />
        </div>
      </div>
      {/* </div>
      </div> */}
    </main>
  );
}
