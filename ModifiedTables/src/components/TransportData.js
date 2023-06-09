const TransportData = ({ transport }) => {
  const transportTT = transport.filter((item) => {
    return item.sectorId === 4;
  });
  return (
    <>
      {""}
      {transportTT.map((curTransport) => {
        const { period, "fuel-name": fuelName, emissions } = curTransport;
        const uniqueKey = `${period}${fuelName}`;
        return (
          <tr key={uniqueKey}>
            <td>{period}</td>
            <td>{fuelName}</td>
            <td>{Math.round(emissions)}</td>
          </tr>
        );
      })}
    </>
  );
};
export default TransportData;
