import React from "react";

// hoc is called Higher Order Component
// but it's not a component
// it's just a function that takes in a Component as argument
// and returns a new Component
// HOC prevent redundancy and writing same logic repetitively

const DEFAULT_CONFIG_OPT = {
  initCount: 0,
  title: "DEFAULT_CONFIG_OPT title"
}

export default function withCounter(Component, configOpt={
  initCount: 0, 
  title: "Counter"}
) {  // this function return a Component
  
  configOpt = {
    ...DEFAULT_CONFIG_OPT,
    ...configOpt
  }

  return class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      console.log(configOpt);

      this.state = {
        count: configOpt.initCount,
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
      this.setState({ count: configOpt.initCount });
    }

    render = () => {
      // console.log(this.props); // props is Obj, pass all props to Component using {...this.props}
      return (
        <div>
          <div>{configOpt.title}</div>
          <Component 
            {...this.props} 
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            incrementByAmount={this.incrementByAmount}
            reset={this.reset}  
          />
        </div>
      );
    }
  }
}

// <div style={{background: "red"}}>
// </div>
