import React, { Component, PureComponent } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.handleRerender = this.handleRerender.bind(this);
    this.state = {
      bool: true,
    };
  }

  handleRerender() {
    this.setState({ bool: !this.state.bool });
  }

  componentDidUpdate() {
    console.log("child rerendered");
  }

  // When we click 'add' button, sth. changed in Child, the Child rerenders
  // When we click 'change theme', nothing happen to Child, but still Child rerenders. Nothing in the Child changed, but react still go into all Childs to run diffing algorithm to do the reconciliation, it's not necessary to rerendered Childs. 
  // If Child is very big component, then reconciliation will take longer and our app is not very performant, we can optimize performance by using shouldComponentUpdate(nextProps,nextState) to prevent unnecessary rerender.
  shouldComponentUpdate(nextProps, nextState) {  // prevent unnecessary rerender
    const propKeys = Object.keys(nextProps)
    for (let i=0; i < propKeys.length; i++) {
      const key = propKeys[i];
      if(nextProps[key] !== this.props[key]) return true;
    } 
    const stateKeys = Object.keys(nextState)
    for (let i=0; i < stateKeys.length; i++) {
      const key = stateKeys[i];
      if(nextState[key] !== this.state[key]) return true;
    } 

    return false;
  }

  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <h3>Innocent Child Component</h3>
        <div>Count: {this.props.count}</div>
        <button onClick={this.handleRerender}>rerender child</button>
      </div>
    );
  }
}


// what causes rerender
// 1. state change
// 2. parent rerender causes all children to rerender 
// 3. props change (the same with 2nd point)

