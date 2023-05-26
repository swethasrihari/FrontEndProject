import { backgroundColors, borderColors } from ".././utils/barChartColors";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  return (
    <div className="electricityYearly">
      <h3>CO2 Emission From Electricity</h3>
      <div style={{ maxWidth: "1200px" }}>
        <Bar
          data={{
            labels: props.year,
            datasets: [
              {
                data: props.data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 0.5
              }
            ]
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true
                  }
                }
              ]
            },
            legend: {
              labels: {
                fontSize: 10
              }
            }
          }}
        />
      </div>
    </div>
  );
}
