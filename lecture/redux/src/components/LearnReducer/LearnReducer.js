import React, { useReducer } from 'react'
import { useState } from 'react'

export default function LearnReducer() {
  return (
    <div>
      <StateCounter />
      <ReducerCounter />
    </div>
  )
}


function StateCounter() {
  const [ count, setCount ] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>State Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}


function countReducer(prevCount, action) {  // return value of countReducer() will be the new state value
  // console.log("prevCount", prevCount);
  // console.log("action", action);
  switch(action.type) {
    case "add":
      return prevCount + 1;
    case "minus":
      return prevCount - 1;
    case "reset":
      return 0;
    default:
      return prevCount;
  }

  // return "new State"
}

function ReducerCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);  // reducer is the logic to decide how the state should be updated

  return (
    <div>
      <h1>Reducer Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => {dispatch({type: "add"})}}>Add</button>
      <button onClick={() => {dispatch({type: "minus"})}}>Minus</button>
      <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
      <button onClick={() => {dispatch({type: "plus"})}}>Random</button>
    </div>
  );
}