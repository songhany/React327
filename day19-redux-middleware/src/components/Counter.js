import React from "react";
import { useState } from "react";
import { useMySelector } from "../library/myReactRedux";
// import { useSelector } from "react-redux";

export default function Counter() {
  const count = useMySelector(state => state.value)

  

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      {/* <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button> */}
    </div>
  );
}