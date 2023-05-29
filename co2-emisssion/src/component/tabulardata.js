import React from "react";
const Table = ({ data }) => {
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
        {data.map((item) => (
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
};
export default Table;
