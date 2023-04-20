import React from "react";

import Counter from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello Songhan Yu</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
        <Counter />
      </div>
    );
  }
}