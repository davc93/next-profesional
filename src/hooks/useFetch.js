import React from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = React.useState([]);
  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  React.useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return data;
};
export default useFetch;
