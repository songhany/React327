import React, { Component } from 'react'

const peopleList = [
  { id: 1, name: "Alice", gender: "Female", age: 25 },
  { id: 2, name: "Bob", gender: "Male", age: 30 },
  { id: 3, name: "Charlie", gender: "Male", age: 40 },
  { id: 4, name: "Diana", gender: "Female", age: 28 },
  { id: 5, name: "Eve", gender: "Female", age: 22 },
];

export default class Day2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      theme: "dark",
      people: peopleList
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);

    console.log("component is created");
  }
  
  handleAdd() {
    // console.log("this", this);
    this.setState({count: this.state.count + 1})
    // console.log(this.state);
  }

  toggleTheme() {
    this.setState({ 
      theme : this.state.theme === "light" ? "dark" : "light"
    })
  }

  componentDidMount() {
    console.log("Commit phase:", "Component did mount")
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
    if (prevState.count !== this.state.count) {
      console.log("count changed");
    }
    if (prevState.theme !== this.state.theme) {
      console.log("theme changed");
    }
    // console.log("component just updated")
  }

  render() {
    console.log("Render phase:", "now being rendered")
    return (
      <div>
        <div>{this.props.num}</div>
        <div>State: {this.state.count}</div>
        <div>State: {this.state.theme}</div>
        {/* <div>
          <h3>people</h3>
          {this.state.people.map(person => {
            return (

              <div key={person.id}>
                {person.name}
              </div>
            )
          })}
        </div> */}
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.toggleTheme}>Change Theme</button>
      </div>
    )
  }
}


// diffing algorithm / reconciliation
/* 
  <div>
    <div>State count: 0</div>
    <div>Theme: dark</div>
    <button onClick={this.handleAdd}>add</button>
    <button onClick={this.toggleTheme}>change theme</button>
  </div>

  <div>
    <div>State count: 1</div>
    <div>Theme: dark</div>
    <button onClick={this.handleAdd}>add</button>
    <button onClick={this.toggleTheme}>change theme</button>
  </div> 
*/

// diffing algorithm is just the algorithm used to the find the differences between two virtual DOM
// virtual DOM is just a copy of the real DOM

// reconciliation is the process of using diffing algorithm
// to compare the two copies of virtual dom
// and then applpy the minimum amount of updates to the real DOM
