import { useState, useEffect } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  console.log("custom hook runs");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function incrementByAmount(e) {
    console.log(e.target);
    setCount(count + Number(e.target.value));
  }

  return {count, increment, decrement, reset, incrementByAmount}
}