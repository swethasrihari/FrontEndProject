import React, { useState, useEffect } from "react";

import Records from "../component/record";

import Pagination from "../component/bPagination";

export default function Page(props) {
  const [allData, setALLData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const url = `https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&data[]=value&start=2015&
  facets[sectorId][]=EC&facets[fuelId][]=TO&facets[stateId][]=${props.name}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setALLData(data.response.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allData.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(allData.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <Records data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
