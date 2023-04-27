import React, { Component } from 'react'

export default class Unmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showChild: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 })
  }

  handleToggle() {
    this.setState({ showChild: !this.state.showChild });
  }

  // componentDidUpdate() {
  //   console.log("parent rerendered");
  // }

  render() {
    const {showChild} = this.state;
    return (
      <div>
        <h1>Parent</h1>
        <div>{showChild ? "true" : "false"}</div>
        <button onClick={this.handleToggle}>
          {showChild ? "Hide child" : "Show child"}
        </button>
        <button onClick={this.handleAdd}>render parent</button>
        <div>{showChild ? <Child /> : null }</div>
      </div>
    )
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.timeoutIds = [];
  }

  componentDidMount() {
    console.log("child mounted");
  }

  componentDidUpdate() {
    console.log("child rerendered");
  }

  componentWillUnmount() {  // 1. clean up all of side effects, ex. const timeoutId = setTimeout(() => {console.log('sth.'); }, 1500)  // 2. disconnect with database, server and tool
    // console.log("child is going to unmount");
    // clearTimeout(this.timeoutId);  // only clear the last one
    this.timeoutIds.forEach((id) => {
      clearTimeout(id);
    })
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => {
          const timeoutId = setTimeout(() => {
            console.log("something");
          }, 2000)
          this.timeoutIds.push(timeoutId);
        }}>Async Logger</button>
      </div>
    )
  }
}
