import React from 'react';
import withInfiniteScroll from '../hoc/withInfiniteScroll';

function InfiniteScrollHOC({ loading, posts, hasMore, error, lastPostElementRef }) {
  // render component using the props

  return (
    <div className='card-container'>
      {posts.map((post) => (
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

export default withInfiniteScroll(InfiniteScrollHOC, 'https://jsonplaceholder.typicode.com/posts');