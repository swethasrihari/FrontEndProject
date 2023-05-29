import { useState, useEffect } from "react";

export default function ETable(props) {
  const url =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&data[]=value&facets[sectorId][]=EC&start=2015";

  const [allEData, setALLEData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setALLEData(data.response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <table class="table table-hover table-info">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">State-name</th>
          <th scope="col">Fuel-name</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {allEData.map((item) => (
          <tr key={item.id}>
            <td>{item.period}</td>
            <td>{item.stateId}</td>
            <td>{item.fuelId} </td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
