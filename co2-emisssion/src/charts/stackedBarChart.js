import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true
    }
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        drawOnChartArea: false
      },
      stacked: true
    },
    y: {
      grid: {
        drawOnChartArea: false
      },
      stacked: true
    }
  }
};

export function StackedBarChart(props) {
  return (
    <Bar
      options={options}
      data={{
        labels: props.year,
        datasets: [
          {
            label: "Residential Dataset",
            data: props.rdata,
            backgroundColor: "orange"
            //borderColor: borderColors,
            //barThickness: 6
          },
          {
            label: "Industrical Dataset",
            data: props.idata,
            backgroundColor: "blue"
            //borderColor: borderColors
          },
          {
            label: "Commercial Dataset",
            data: props.cdata,
            backgroundColor: "purple"
            //borderColor: borderColors
          },
          {
            label: "Electric Power Dataset",
            data: props.edata,
            backgroundColor: "green"
            //borderColor: borderColors
          },
          {
            label: "transport Dataset",
            data: props.tdata,
            backgroundColor: "brown"
            //borderColor: borderColors
          }
        ]
      }}
    />
  );
}
