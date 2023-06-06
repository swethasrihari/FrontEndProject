// const FuelData = ({ fuel }) => {
//   //  console.log("Fuel is:", fuel);
//   return (
//     <>
//       {" "}
//       {fuel.map((curFuel) => {
//         const { period, sectorId, fuelId, value } = curFuel;

//         if (sectorId === "TT") {
//           return (
//             <tr>
//               <td key="0">{period}</td>
//               <td key="1">{sectorId}</td>
//               <td key="2">{fuelId}</td>
//               <td key="3">{value}</td>
//             </tr>
//           );
//         } else return "";
//       })}
//     </>
//   );
// };
// export default FuelData;

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
