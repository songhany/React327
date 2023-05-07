import React, { Component } from "react";
import store from "./store";
//import user from "./images/user.png";
import "./App.css";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <UserCard />
    )
  }
}

export default App;

