import React, { useEffect, useState } from 'react'
import { store } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useMyDispatch, useMySelector } from '../library/myReactRedux';
import { addCount, asyncAddCount, minusCount } from "../redux/reducers/counterReducer";

export default function AnotherCounter3UseSelector() {
  // ### useSelector: reads state from the store
  // const selectState = state => state;
  // const state = useSelector(state => state);
// 
  // ### Official way
  const value = useSelector((state) => {
    // console.log(state);
    return state.counter.value
  });  // useSelector() is how we read state from global store
  const dispatch = useDispatch();  // useDispatch() is how we get dispatch function, which === store.dispatch
  console.log(dispatch === store.dispatch);

  // ### My way
  // const value = useMySelector((state) => state.value);
  // const dispatch = useMyDispatch();
  // console.log(value);

  useEffect(() => {
    console.log("counter rerendered");
  })

  function increment() {
    // store.dispatch({ type: "increment" });
    // dispatch({ type: "increment" });
    dispatch(addCount());
  }

  function decrement() {
    // store.dispatch({ type: "decrement" });
    // dispatch({ type: "decrement" });
    dispatch(minusCount());
  }

  function asyncIncrement() {
    dispatch(asyncAddCount());
  }

  // function reset() {

  // }

  return (
    <div>
      <h1>Counter2 that shares data with useSelector</h1>
      <div>{value}</div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      <button onClick={asyncIncrement}>Async Add</button>
      {/* <button onClick={reset}>reset</button> */}
    </div>
  )
}