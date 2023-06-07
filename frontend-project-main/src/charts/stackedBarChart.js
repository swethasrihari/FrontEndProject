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
            backgroundColor: "Teal"
          },
          {
            label: "Industrical Dataset",
            data: props.idata,
            backgroundColor: "Blue"
          },
          {
            label: "Commercial Dataset",
            data: props.cdata,
            backgroundColor: "Orange"
          },
          {
            label: "Electric Power Dataset",
            data: props.edata,
            backgroundColor: "Green"
          },
          {
            label: "transport Dataset",
            data: props.tdata,
            backgroundColor: "Purple"
          }
        ]
      }}
    />
  );
}
