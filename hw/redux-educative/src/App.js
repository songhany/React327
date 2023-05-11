import React, { Component } from "react";
import BankApp from "./components/3bankApplication/BankApp";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <BankApp />
    )
  }
}

export default App;