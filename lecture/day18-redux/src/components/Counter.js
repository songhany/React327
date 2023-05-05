import React from 'react'
import { useState } from 'react';
import { store } from '../store';

export default function Counter() {
  const count = store.getState();

  function increment() {
    
  }

  function decrement() {

  }

  function reset() {

  }

  return (
    <div>
      <h1>Counter</h1>
      <div>{count.value}</div>
      {/* <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button> */}
    </div>
  )
}
