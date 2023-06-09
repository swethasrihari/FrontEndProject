import IndustryFetch from "./IndustryFetch";
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
        {data.map((row, index) => {
          return (
            <tr key={index}>
              <td>{row.period}</td>
              <td>{row.stateId}</td>

              <td>{row["fuel-name"]} </td>
              <td>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
