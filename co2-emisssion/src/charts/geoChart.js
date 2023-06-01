import { useState, useEffect } from "react";
import { ChartGeo } from "chartjs-chart-geo";
import { Chart } from "chart.js";

export default function GeoChart() {
  const url = "https://unpkg.com/us-atlas/states-10m.json";
  const [nation, setNation] = useState([]);
  const [states, setStates] = useState([]);
  let canvas = document.getElementById("canvas");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((us) => {
        setNation(ChartGeo.topojson.feature(us, us.objects.nation).features[0]);
        setStates(ChartGeo.topojson.feature(us, us.objects.states).features);
      })
      .catch((error) => console.log(error));
  }, [url]);

  if (!canvas) return;

  const chart = new Chart(canvas.getContext("2d"), {
    type: "choropleth",
    data: {
      labels: states.map((d) => d.properties.name),
      datasets: [
        {
          label: "States",
          outline: nation,
          data: states.map((d) => ({
            feature: d,
            value: Math.random() * 10
          }))
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        projection: {
          axis: "x",
          projection: "albersUsa"
        },
        color: {
          axis: "x",
          quantize: 5,
          legend: {
            position: "bottom-right",
            align: "bottom"
          }
        }
      }
    }
  });
  return (
    <div>
      <canvas id="canvas" width="640" height="480"></canvas>
    </div>
  );
}
