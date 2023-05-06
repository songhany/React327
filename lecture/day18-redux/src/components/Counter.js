import React, { useState, useSelector }  from 'react';
import { store } from '../store';
import { useMySelector } from '../library/myReactRedux';
// import { useSelector } from 'react-redux';

export default function Counter() {
  const value = useMySelector((state) => state.value);

  function increment() {
    
  }

  function decrement() {

  }

  function reset() {

  }

  return (
    <div>
      <h1>Counter</h1>
      <div>{value}</div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
