import React, { useState, useEffect } from "react";

import Pagination from "../component/bPagination";
import Table from "./tabulardata";

export default function OverviewPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const url = `https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=kkaE2ndPVebUUtSQGB5WeiASLYDARBGooKE2Cr01&data[]=value&facets[fuelId][]=TO&facets[sectorId][]=TT&start=${props.year}&end=${props.year}`;

  const [allData, setALLData] = useState([]);

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
      <Table data={currentRecords} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
