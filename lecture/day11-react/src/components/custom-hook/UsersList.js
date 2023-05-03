import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'

export default function UsersList() {
  // const [users, setUsers] = useState([])
  const { data: users, loading } = useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <div>loading...</div>;

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then(setUsers)
  // }, [])

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.username}</div>
        })}
      </div>
    </div>
  )
}
