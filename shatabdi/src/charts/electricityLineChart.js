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
      <div style={styles.chartContainer}>
        <Line data={data} />
      </div>
    </section>
  );
}

const styles = {
  chartContainer: {
    maxWidth: "500px",
    width: "60%",
    height: "60%",
    margin: "20px auto"
  }
};
