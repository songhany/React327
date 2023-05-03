import React from 'react'
import Counter from './Counter'
import PostsList from './PostsList'
import UsersList from './UsersList'
import Post from './Post'

export default function Day6() {
  return (
    <div>
      <h1>Day6 Custom hook</h1>
      <Counter />
      <Post />
      <PostsList />
      <UsersList />
    </div>
  )
}
