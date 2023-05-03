import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';

export default function PostsList() {
  // const [posts, setPosts] = useState([]);
  const { data: posts, loading } = useFetch("https://jsonplaceholder.typicode.com/posts")

  if (loading) return <div>loading...</div>;
  
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then(setPosts)
  // }, []);

  return (
    <div>
      <h1>Post List</h1>
      <div>
        {posts.map(post => {
          return (
            <div key={post.id}>
              {post.id} {post.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}
