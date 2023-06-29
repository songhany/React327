import React, { useEffect, useState } from "react";

export default function useFetch(api) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, []);

  return { data, loading }
}