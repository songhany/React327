import React, { useState, useEffect } from 'react'

// have states / mimic lifecycle methods
export default function Mimic() {
  return (
    <div>
      <h1>Mimic</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  //useEffect will always be called when the component mounts

  //WAY1: is almost equivelant to componentDidUpdate, which called everytime after component rerenders
  //   useEffect(() => {
  //     console.log("effect");
  //   });

  //WAY2: if any variable in dependency array changes, the function will be called
  //   useEffect(() => {
  //     console.log("count or isHidden updated")
  //   }, [count,isHidden]);

  //WAY3: componentDidMount
  //   useEffect(() => {
  //     console.log("this will only be run once");
  //   }, []);

  function increment() {
    setCount(count + 1);
  }

  function increment3() {
    // the value of count is 0 by the time we call the function 
    // "when we call setState, a new closure is created"
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  function toggleDisplay() {
    // setIsHidden(!isHidden);   // DO NOT USE THIS WAY
    setIsHidden(prev => !prev);  // recommand use "prev"
  }

  return (
    <div>
      <div>Count: {isHidden ? "" : count}</div>
      <button onClick={increment}>add</button>
      <button onClick={increment3}>add 3</button>
      <button onClick={toggleDisplay}>{isHidden ? "Show" : "Hide"}</button>
      {isHidden ? null : <Foo />}
    </div>
  );
}


function Foo() {
  const [count, setCount] = useState(0);

  //how we mimic componentDidMount / componentWillUnmount
  useEffect(() => {
    console.log("component did mount");

    return () => {  // componentWillUnmount
      console.log("component will unmount");
    };
  }, []);

  return <div>
    <h2>Foo count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Foo btn</button>
  </div>
}