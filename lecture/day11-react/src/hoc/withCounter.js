import React from "react";

// hoc is called Higher Order Component
// but it's not a component
// it's just a function that takes in a Component as argument
// and returns a new Component
// hoc prevent redundancy and writing same logic repetitively

export default function withCounter(Component, initCount=0) {  // this function return a Component
  
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: initCount,
      }
      // this.increment = this.increment.bind(this);
      // this.decrement = this.decrement.bind(this);
      // this.incrementByAmount = this.incrementByAmount.bind(this);
      // this.reset = this.reset.bind(this);
    }

    increment = () => {
      this.setState({ count: this.state.count + 1});
    }

    decrement = () => {
      this.setState({ count: this.state.count - 1});
    }

    incrementByAmount = (e) => {
      console.log(e.target);
      this.setState({ count: this.state.count + parseInt(e.target.value) });
    }

    reset = () => {
      this.setState({ count: 0 });
    }

    render = () => {
      // console.log(this.props); // props is Obj, pass all props to Component using {...this.props}
      return (
        <Component 
          {...this.props} 
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          incrementByAmount={this.incrementByAmount}
          reset={this.reset}  
        />
      );
    }
  }
}

// <div style={{background: "red"}}>
// </div>
