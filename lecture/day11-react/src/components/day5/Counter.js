import React from "react";
import withCounter from "../../hoc/withCounter";
import withLogging from "../../hoc/withLogging";

class Counter extends React.Component {  // track how many time user clicked
  // // We can REMOVE all of those below unnecessary comment part 
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  //   this.state = {
  //     count: 0
  //   }
  //   this.handleAdd = this.handleAdd.bind(this);
  //   this.handleMinus = this.handleMinus.bind(this);

  // }

  // handleAdd() {
  //   this.setState({ count: this.state.count + 1});
  // }

  // handleMinus() {
  //   this.setState({ count: this.state.count - 1});
  // }

  render() {
    const { count, increment, decrement, reset, incrementByAmount} = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={increment}>Add</button>
        <button onClick={incrementByAmount} value={10}>Add by amount 10</button>
        <button onClick={decrement}>Minus</button>
        <button onClick={reset}>reset</button>
      </div>
    )

  }
}

// const NewComponent = withCounter(Counter)
// console.log(NewComponent)
export default withCounter(withLogging(Counter), {
  initCount: 10,
  // title: "Customized title"
});
