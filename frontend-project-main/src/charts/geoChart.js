// import React, { useEffect, useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   Tooltip,
//   Title,
//   Legend
// } from "chart.js";
// import { Chart } from "react-chartjs-2";
// import * as ChartGeo from "chartjs-chart-geo";

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   ChartGeo.ChoroplethController,
//   ChartGeo.ProjectionScale,
//   ChartGeo.ColorScale,
//   ChartGeo.GeoFeature
// );

// export default function GeoChart(props) {
//   const [type, setType] = useState([]);
//   const [mapData, setMapData] = useState([]);
//   const [mapOptions, setMapOptions] = useState([]);
//   const [dataCO2ValuesForMap, setDataCO2ValuesMap] = useState([]);

//   useEffect(() => {
//     const stateCo2Data = props.data.map((item) => {
//       return {
//         state: item["state-name"],
//         value: item.value,
//         fuelName: item["fuel-name"]
//       };
//     });

//     const allFuelsData = stateCo2Data.filter((item) => {
//       return item.fuelName === "All Fuels";
//     });

//     const allFuelsDataCleaned = allFuelsData.map((item) => {
//       return {
//         state: item.state,
//         value: item.value
//       };
//     });

//     setDataCO2ValuesMap(allFuelsDataCleaned);
//   }, []);

//   const findCO2ValueForState = (stateName) => {
//     const found = dataCO2ValuesForMap.find(
//       (element) => element.state === stateName
//     );
//     if (found) {
//       return found.value;
//     } else {
//       return 0;
//     }
//   };

//   useEffect(() => {
//     const url = "https://unpkg.com/us-atlas/states-10m.json";
//     fetch(url)
//       .then((result) => result.json())
//       .then((us) => {
//         const nation = ChartGeo.topojson.feature(us, us.objects.nation)
//           .features[0];
//         const states = ChartGeo.topojson.feature(us, us.objects.states)
//           .features;

//         setType("choropleth");

//         setMapData({
//           labels: states.map((d) => d.properties.name),
//           datasets: [
//             {
//               label: "States",
//               outline: nation,
//               data: states.map((d) => ({
//                 feature: d,
//                 value: findCO2ValueForState(d.properties.name)
//               }))
//             }
//           ]
//         });

//         setMapOptions({
//           plugins: {
//             legend: {
//               display: false
//             }
//           },
//           scales: {
//             projection: {
//               axis: "x",
//               projection: "albersUsa"
//             },
//             color: {
//               axis: "x",
//               quantize: 5,
//               legend: {
//                 position: "bottom-right",
//                 align: "bottom"
//               }
//             }
//           }
//         });
//       });
//   }, [dataCO2ValuesForMap]);

//   return (
//     <>
//       {type === "choropleth" ? (
//         <div className="canvasContainer">
//           <h1>C02 Emission in Year 2020 </h1>
//           <Chart
//             className="chart"
//             type={type}
//             data={mapData}
//             options={mapOptions}
//           />
//         </div>
//       ) : (
//         <h1>Data not ready.....</h1>
//       )}
//     </>
//   );
// }
