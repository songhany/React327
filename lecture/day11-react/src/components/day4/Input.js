import React, { useState } from "react";

export default function Input() {
  return (
    <div>
      <h1>Uncontrolled component</h1>
      <Uncontrolled />
      <h1>Controlled component</h1>
      <Controlled />
      <h1>Controlled Checkbox</h1>
      <Checkbox />
    </div>
  );
}

function Uncontrolled() {
  return (
    <div>
      <input onChange={ (e) => { console.log(e.target.value); } } />
      {/* <button onClick={()=>{}}>show input</button> */}
    </div>
  );
}

function Controlled() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input value={username}
        onChange={(e) => {
          // console.log(e.target.value)
          setUsername(e.target.value);
        }}
      />

      <button onClick={() => {
        console.log(username); 
      }}>show name</button>
    </div>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(false);

  function handleCheck(e, message) {
    // console.log(e.target.checked);
    console.log(message);
    setChecked(e.target.checked);
  }

  // const onChange = (e) => {
  //   handleCheck(e, "message");
  // }

  return <input type="checkbox" checked={checked} onChange={e => handleCheck(e, "message")} />;
}