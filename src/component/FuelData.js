const FuelData = ({ fuel }) => {
  const fuelTT = fuel.filter((item) => {
    return item.sectorId === "TT";
  });
  return (
    <>
      {""}
      {fuelTT.map((curFuel) => {
        const { period, "fuel-name": fuelName, value } = curFuel;
        const uniqueKey = `${period}${fuelName}`;
        return (
          <tr key={uniqueKey}>
            <td>{period}</td>
            <td>{fuelName}</td>
            <td>{value}</td>
          </tr>
        );
      })}
    </>
  );
};
export default FuelData;
