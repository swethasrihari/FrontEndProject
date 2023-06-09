import axios from "axios";
import { useEffect, useState } from "react";

export default function IndustryFetch() {
  const url =
    "https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?api_key=g3lgYGERkaVzAQlsZBrK5K1UlYVaLVRsKMFRmTWK&frequency=annual&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000";
  const [industryData, setIndustryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(url).then((res) => {
        setIndustryData(res.data.response.data);
      });
    };
    fetchData();
  }, []);
  return industryData;
}
