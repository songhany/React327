import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSearch from '../hooks/useSearch';

export default function withInfiniteScroll(WrappedComponent, apiUrl) {
  return function(props) {
    // ### const { loading, posts, hasMore, error } = useSearch(apiUrl);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setLoading(true)
  
      fetch(apiUrl)
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
    }, [apiUrl])

    // Calculate how many result show each time when I scroll down to the botton of the page
    const RESULTS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedResults, setDisplayedResults] = useState([]);

    useEffect(() => {
      const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
      const endIndex = startIndex + RESULTS_PER_PAGE;
      const resultsToShow = posts.slice(startIndex, endIndex);
      setDisplayedResults([...displayedResults, ...resultsToShow]);
    }, [ posts, currentPage]);

    const observer = useRef();
    const lastPostElementRef = useCallback((lastPost) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore) {
            setTimeout(() => {  // setTimeout for seeing the loading process
              setCurrentPage((currentPage) => currentPage + 1);
            }, 1000);
          }
        });
        if (lastPost) observer.current.observe(lastPost);
      }, [loading, hasMore]);

    return <WrappedComponent {...props} loading={loading} posts={displayedResults} hasMore={hasMore} error={error} lastPostElementRef={lastPostElementRef} />;
  }
}