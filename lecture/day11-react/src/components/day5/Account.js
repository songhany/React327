import React from "react";
import withCounter from "../../hoc/withCounter";

class Account extends React.Component {  // deposit money
  // // We can REMOVE all of those below unnecessary comment part 
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dollars: 0,
  //   }
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  // handleAdd() {
  //   this.setState({ dollars: this.state.dollars + 1});
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("props", this.props);
  // }

  render() {
    const { count: balance, increment, decrement } = this.props;
    return (
      <div>
        <h1>Saving Account</h1>
        <div>{balance}</div>
        <button onClick={increment}>deposit</button>
        <button onClick={decrement}>take money out</button>
      </div>
    );
  }
}

// const NewAccount = withCounter(Account);
export default withCounter(Account);

// export default withA(withB(withC(withD(withE(Account)))));  // if we try to re-use multiple HOC logic, could cause 'HOC hell'