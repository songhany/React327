import React, { Component, useEffect, useState } from "react";

export default class MultipleUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // incrementThreeTimes = async () => {  // this work
  //   await this.setState({ count: this.state.count + 1 });
  //   await this.setState({ count: this.state.count + 1 });
  //   await this.setState({ count: this.state.count + 1 });
  // }

  incrementThreeTimes = () => {
    //state.count is 0

    // it doesn't work because this.state.count is 0, inside
    // this function it's always going be 0
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // ### Above three lines is the same things as below ###
    // this.setState({ count: 0 + 1 });
    // this.setState({ count: 0 + 1 });
    // this.setState({ count: 0 + 1 });

    //we want to update the state value based on its previous value
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.incrementThreeTimes}>+3</button>
        <h1>count: {this.state.count}</h1>

        <br />
        <br />
        <br />
        <BoolExample />
      </>
    );
  }
}

class BoolExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({ bool: !prev.bool }));
    setTimeout(() => {
      this.setState((prev) => ({ bool: !prev.bool }));
    }, 1500);
  }

  render() {
    return (
      <div>
        <div>{this.state.bool ? "true" : "false"}</div>
        <button onClick={this.handleClick}>Toggle Twice</button>
      </div>
    );
  }
}


// function BoolExample() {
//   const [bool, setBool] = useState(true);

//   const handleClick = () => {
//     setBool((prev) => !prev);
//     setTimeout(() => {
//       setBool((prev) => !prev);
//     }, 1500);
//   };

//   return (
//     <div>
//       <div>{bool ? "true" : "false"}</div>
//       <button onClick={handleClick}>Toggle Twice</button>
//     </div>
//   );
// }
