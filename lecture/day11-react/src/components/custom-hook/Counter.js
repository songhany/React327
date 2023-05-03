import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter';


export default function Counter() {
  // const [hidden, setHidden] = useState(false);
  // const {count, increment, decrement, reset} = useCounter();  // useCounter() return Obj, we use Obj to deconstruct. In Obj, order of element doesn't matter, but we need to know the actual variable name to deconstruct variable
  const [count, XXX, decrement, reset] = useCounter();  // useCounter() return array, we use array to deconstruct. In Array, order matter, but we can rename variable name in its corresponding array position.

  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={XXX}>add</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

// export default withCounter(Counter);