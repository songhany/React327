import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function Post() {
  const { data: post, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
  // console.log(post);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <h1>Post</h1>
      <div>{post.id}</div>
      <div>{post.title}</div>
      {/* <div>{post.body}</div> */}
    </div>
  )
}
