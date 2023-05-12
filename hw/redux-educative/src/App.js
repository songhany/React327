import React, { Component } from "react";
import { store } from "./store";
import BankApp from "./components/BankApplication/BankApp";

class App extends Component {
  render() {
    return (
      <BankApp />
    )
  }
}

export default App;