import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    // console.log("this", this);
    this.setState({count: this.state.count + 1})
    // console.log(this.state);
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  }

  componentDidMount() {
    console.log("Commit phase:", "Component did mount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("nextState", nextState);
  //   // console.log("curState", this.state);
  //   // if (nextState.count !== this.state.count) {
  //   //   return true;
  //   // }
  //   console.log("determining if we should update");
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("component just updated");
  }

  render() {
    console.log("Render phase:", "now being rendered");
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.handleAdd}>add</button>
      </div>
    );
  }
}
