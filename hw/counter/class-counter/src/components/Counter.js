import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
     this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.handleAdd}>add</button>
      </div>
    )
  }
}
