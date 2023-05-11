import React, { Component } from 'react'

class Child extends Component {
  render() {
    const { count, handleAdd } = this.props;
    return <div style={{border: "1px solid black"}}>
      <h2>Child</h2>
      <div>Count from parent: {count}</div>
      <button onClick={handleAdd}>child btn</button>
    </div>;
  }
}

class Child2 extends Component {
  render() {
    return <div style={{border: "1px solid black"}}>
      <h2>Child</h2>
      <div>Count from parent: {this.props.count}</div>
      <button onClick={this.props.handleAdd}>child btn</button>
    </div>;
  }
}


export default class ParentChild extends Component {
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
    console.log(this.state);
    const {count} = this.state;
    return (
      <div>
        <h1>Parent</h1>
        <div>Count in parent: {count}</div>
        <button onClick={this.handleAdd}>parent btn</button>
        <Child count={count} handleAdd={this.handleAdd}/>
        <Child2 count={count} />
      </div>
    )
  }
}
