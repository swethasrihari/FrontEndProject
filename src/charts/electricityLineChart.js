import { borderColors } from ".././utils/lineChartColor";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function ELineChart(props) {
  let year = [];
  let value = [];
  props.sdata.sdata.forEach((element) => {
    if (
      element.period >= 2015 &&
      element.sectorId === "EC" &&
      element.fuelId === "TO"
    ) {
      year.push(element.period);
      value.push(element.value);
    }
  });

  const data = {
    labels: year,
    datasets: [
      {
        axis: "y",
        label: "Last 5 year Co2 Emission Electricity",
        data: value,
        fill: false,
        borderColor: borderColors,
        tension: 0.1
      }
    ]
  };
  return (
    <section className="container">
      <div>
        <Line data={data} option={options} />
      </div>
    </section>
  );
}

var options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
};
