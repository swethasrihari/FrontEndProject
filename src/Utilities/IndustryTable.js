import IndustryFetch from "./IndustryFetch";
import { useState } from "react";
export default function IndustryTable(input) {
  const data = IndustryFetch();
  return (
    <table className="table table-hover ">
      <thead>
        <tr>
          <th className="text-center" scope="col">
            Year
          </th>
          <th className="text-center" scope="col">
            State-name
          </th>

          <th className="text-center" scope="col">
            Fuel-name
          </th>
          <th className="text-center" scope="col">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.stateId}>
              <td>{row.period}</td>
              <td>{row.stateId}</td>

              <td>{row.fuelId} </td>
              <td>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
