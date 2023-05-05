import React, { useEffect, useState } from 'react'

export default function useSearch(url, numOfResult=10) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data)
        setHasMore(data.length > 0)
        // console.log(data.length);
        setLoading(false)
      })
      .catch(e => {
        setError(true);
        setLoading(false);
      })
  }, [url])
  
  // console.log(posts)
  return { loading, posts, hasMore, error };
}
