import React, { useState, useEffect, useCallback, useRef } from 'react'
import './style.css'
import useSearch from '../hooks/useSearch'


export default function InfiniteScroll() {
  const API = 'https://jsonplaceholder.typicode.com/posts';
  const { loading, posts, hasMore, error } = useSearch(API);
  
  const RESULTS_PER_PAGE = 10;  // every time show 10 result
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedResults, setDisplayedResults] = useState([]);

  useEffect(() => {
    // Calculate the starting and ending idx for the current page
    const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
    const endIndex = startIndex + RESULTS_PER_PAGE;

    // Extract results from startIdx to endIdx
    const resultsToShow = posts.slice(startIndex, endIndex);
    setDisplayedResults([...displayedResults, ...resultsToShow]);
  }, [currentPage, posts]);


  // intersection observer
  const observer = useRef();
  const lastPostElementRef = useCallback(
    (lastPost) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(() => {
            setCurrentPage((currentPage) => currentPage + 1);
          }, 1000);
        }
      });
      if (lastPost) observer.current.observe(lastPost);
    }, [loading, hasMore]);


  return (
    <div className='card-container'>
      {displayedResults.map((post) => (
        <div key={post.id} className='card'>
          <div className='body'>{post.body} ({post.id})</div>
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {hasMore && (
        <div ref={lastPostElementRef} className='card' style={{ border: '1px solid red' }}>
          last item
        </div>
      )}
    </div>
  );
}
