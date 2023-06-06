const FuelData = ({ fuel }) => {
  //  console.log("Fuel is:", fuel);
  return (
    <>
      {" "}
      {fuel.map((curFuel) => {
        const { period, sectorId, fuelId, value } = curFuel;

        if (sectorId === "TT") {
          return (
            <tr key={period}>
              <td>{period}</td>
              <td>{sectorId}</td>
              <td>{`sector-name`}</td>
              <td>{fuelId}</td>
              <td>{value}</td>
            </tr>
          );
        }
      })}
    </>
  );
};
export default FuelData;
