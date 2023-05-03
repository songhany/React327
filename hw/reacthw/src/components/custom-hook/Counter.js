  import React from 'react'
  import useCounter from './hooks/useCounter';
  import { useFormInput } from './hooks/useFormInput';
  import { useTimer } from './hooks/useTimer';


  export default function Counter() {
    const {count, increment, decrement, reset, incrementByAmount} = useCounter();  // useCounter() return Obj, we use Obj to deconstruct. In Obj, order of element doesn't matter, but we need to know the actual variable name to deconstruct variable

    const amountProps = useFormInput(10);
    const second = useTimer(0);

    return (
      <div>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={increment}>add</button>
        <button onClick={decrement}>minus</button>
        <button onClick={reset}>reset</button>
        <br/>
        <br/>
        <div>
          Amount
          <input {...amountProps}/>
        </div>
        <button onClick={incrementByAmount} value={amountProps.value}>addByAmount</button>

        <h3>Time passed: {second} seconds</h3>;
      </div>
    )
  }