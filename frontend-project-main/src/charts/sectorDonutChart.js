import { Doughnut } from "react-chartjs-2";
import { backgroundColors, borderColors } from ".././utils/donutChartColors";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
import { StackedBarChart } from "./stackedBarChart";

Chart.register(ArcElement, Tooltip, Legend);

export default function Sector(props) {
  let year = [];
  let residentialValue = [];
  let industrialValue = [];
  let commercialValue = [];
  let electricPowerValue = [];
  let transportValue = [];
  let allSectorId = [];
  let allSector = [];

  props.sdata.sdata.forEach((element) => {
    if (
      element.period >= 2015 &&
      element.sectorId === "RC" &&
      element.fuelId === "TO"
    ) {
      year.push(element.period);
      residentialValue.push(element.value);
    }
    if (
      element.period >= 2015 &&
      element.sectorId === "IC" &&
      element.fuelId === "TO"
    ) {
      industrialValue.push(element.value);
    }
    if (
      element.period >= 2015 &&
      element.sectorId === "CC" &&
      element.fuelId === "TO"
    ) {
      commercialValue.push(element.value);
    }
    if (
      element.period >= 2015 &&
      element.sectorId === "EC" &&
      element.fuelId === "TO"
    ) {
      electricPowerValue.push(element.value);
    }
    if (
      element.period >= 2015 &&
      element.sectorId === "TC" &&
      element.fuelId === "TO"
    ) {
      transportValue.push(element.value);
    }
    if (
      element.period >= 2015 &&
      element.fuelId === "TO" &&
      element.sectorId === "TT"
    ) {
      allSectorId.push(element.period);
      allSector.push(element.value);
    }
  });

  const data = {
    labels: allSectorId,
    datasets: [
      {
        label: "Sector",
        data: allSector,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <section className="container flex flex-column text-dark">
      <div className="d-flex bd-highlight">
        <div className="card m-4 p-3">
          <h3> 5 years CO2 emission from various sectors </h3>
          <StackedBarChart
            rdata={residentialValue}
            idata={industrialValue}
            cdata={commercialValue}
            edata={electricPowerValue}
            tdata={transportValue}
            year={year}
          />
        </div>
        <div className="card m-4 p-3">
          <h3>Total CO2 emission from sectors</h3>
          <Doughnut
            data={data}
            options={{
              responsive: true,
              aspectRatio: 1.7
            }}
          />
        </div>
      </div>
    </section>
  );
}
