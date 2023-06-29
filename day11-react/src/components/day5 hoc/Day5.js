import React from 'react'
import Counter from './Counter'
import Account from './Account'

// HOCs (higher order components), helps us reuse logic
export default function Day5() {
  return (
    <div>
      <Counter name="Songhan" a="a"/> 

      <Account />
    </div>
  )
}