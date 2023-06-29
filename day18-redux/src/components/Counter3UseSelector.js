import React, { useEffect, useState } from 'react'
import { store } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useMyDispatch, useMySelector } from '../library/myReactRedux';


export default function Counter3UseSelector() {
  // ### useSelector: reads state from the store
  // const selectState = state => state;
  // const state = useSelector(state => state);

  // ### Official way
  const value = useSelector((state) => state.value);  // useSelector() is how we read state from global store
  const dispatch = useDispatch();  // useDispatch() is how we get dispatch function, which === store.dispatch
  // console.log(dispatch === store.dispatch);

  // ### My way
  // const value = useMySelector((state) => state.value);
  // const dispatch = useMyDispatch();
  // console.log(value);

  useEffect(() => {
    console.log("counter rerendered");
  })

  function increment() {
    // store.dispatch({ type: "increment" });
    dispatch({ type: "increment" });
    // console.log(store.getState());
  }

  function decrement() {
    // store.dispatch({ type: "decrement" });
    dispatch({ type: "decrement" });
  }

  // function reset() {

  // }

  return (
    <div>
      <h1>Counter3 useSelector that shares data</h1>
      <div>{value}</div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      {/* <button onClick={reset}>reset</button> */}
    </div>
  )
}