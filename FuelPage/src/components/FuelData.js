const FuelData = ({ fuel }) => {
  //  console.log("Fuel is:", fuel);
  return (
    <>
      {" "}
      {fuel.map((curFuel) => {
        const { period, sectorId, fuelId, stateId, value } = curFuel;
        return (
          <tr key={period}>
            <td>{period}</td>
            <td>{sectorId}</td>
            <td>{fuelId}</td>
            <td>{stateId}</td>
            <td>{value}</td>
          </tr>
        );
      })}
    </>
  );
};
export default FuelData;
