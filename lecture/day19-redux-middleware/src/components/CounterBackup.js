import React, {useState} from 'react'
import { store } from '../redux/store';
import useForceUpdate from '../hooks/useForceUpdate';
console.log(store);

store.subscribe(() => console.log("sth. changed"));  // trigger dispatch() will also trigger this function

// function useForceUpdate() {
//   const [bool, toggle] = useState(true);

//   function forceUpdate() {
//     toggle(prev => !prev);
//   }

//   return forceUpdate;
// }


export default function Counter2() {
  const count = store.getState();
  // const forceUpdate = useForceUpdate();
  // console.log(count.value);

  function increment() {
    store.dispatch({ type: "increment" });
    // console.log(store.getState());
    // forceUpdate(prev => !prev);
  }

  function decrement() {
    store.dispatch({ type: "decrement" });
    // console.log(store.getState());
    // forceUpdate(prev => !prev);
  }

  // function reset() {

  // }

  return (
    <div>
      <h1>Counter2 that shares data which is my backup</h1>
      <div>{count.value}</div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
      {/* <button onClick={reset}>reset</button> */}
    </div>
  )
}