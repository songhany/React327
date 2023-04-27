import React, { Component } from 'react'

class Child extends Component {
  render() {
    return <div style={{border: "1px solid black"}}>
      <h2>Child</h2>
      <div>Count from parent: {this.props.count}</div>
      <button onClick={() => this.props.handleAdd()}>child btn</button>
    </div>;
  }
}


export default class Day3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <div>Count in parent: {this.state.count}</div>
        <button onClick={this.handleAdd}>parent btn</button>
        <Child count={this.state.count} handleAdd={this.handleAdd}/>
      </div>
    )
  }
}

