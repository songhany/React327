import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [sum, setSum] = useState(0);

  function firstNumber(e) {
    // console.log(Number(e.target.value));
    const value = Number(e.target.value);
    // console.log(Number(e.target.value));
    if (!isNaN(value)) {
      setFirst(value);
    }
    // setFirst(parseInt(e.target.value, 10));
  }

  function secondNumber(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSecond(value);
    }
  }

  function addFirstToSecond() {
    setSum(first + second);
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div>
        <input
          // type="number"
          value={first}
          placeholder="First Number"
          onChange={firstNumber}
        />
      </div>
      <br />
      <div>
        <input
          // type="number"
          value={second}
          placeholder="Second Number"
          onChange={secondNumber}
        />
      </div>
      <br />
      <button onClick={addFirstToSecond}>Add Two Numbers</button>
      <div>Total: {sum} </div>
    </div>
  );
}
