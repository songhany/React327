import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = (e) => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleAdd}>add</button>
    </div>
  )
}
