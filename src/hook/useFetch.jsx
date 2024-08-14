import { useEffect, useState } from "react";

export const useFetch = (API) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setData(data);

      setLoading(false);
    };
    getRequest();
  }, [API]);

  return { data, loading };
};
