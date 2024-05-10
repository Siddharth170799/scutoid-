
import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const api=async()=>{
    const response=await axios.get(url)
    console.log(response)
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    api()
  }, [url]);

  return ([data])
};

export default useFetch;

