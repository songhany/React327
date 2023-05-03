import { useState, useEffect } from "react";

// only two places can invoke hooks (useState, useEffect, etc)
// all hooks can only be called inside
// 1. function component
// 2. custom hook  (you can use other custom hook in the custom hook as well)

// custom hooks
// 1. start with lowercase 'use'
// 2. you need to call some other hook
// 3. Custom Hooks will be called after every re-render

export default function useCounter() {
  const [count, setCount] = useState(0);
  // console.log("custom hook runs");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  // return {count, increment, decrement, reset}  // useCounter() return Obj, we use Obj to deconstruct. In Obj, order of element doesn't matter, but we need to know the actual variable name to deconstruct variable
  return [count, increment, decrement, reset]  // useCounter() return array, we use array to deconstruct. In Array, order matter, but we can rename variable name in its corresponding array position.
}


// function Foo() {
//   const [a, setA] = useState("a")
//   useEffect(() => {

//   })
// }