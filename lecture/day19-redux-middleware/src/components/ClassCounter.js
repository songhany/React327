import React, { Component } from 'react'
import { connect } from 'react-redux'
import myConnect from '../library/myConnect';
import { addCount, minusCount } from '../redux/reducers/counterReducer';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  // ### 1st Way
  // increment = () => {
  //   this.props.dispatch({type: 'increment'});
  // }
  // decrement = () => {
  //   this.props.dispatch({type: 'decrement'});
  // }

  render() {
    return (
      <div>
        <h1>Class Count: {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  // how we read 'state.value' inside class component
  // console.log(state);
  return {
    count: state.counter.value
  }
}

// ### 1st Way
// const mapDispatchToProps = (dispatch) => {
//   return {dispatch}
// };
  
// ### 2nd Way
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(addCount()),
    decrement: () => dispatch(minusCount()),
  };
};

// connect() is a HOC that allows class components to read states from store and also dispatch actions

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
// export default myConnect(mapStateToProps, mapDispatchToProps)(ClassCounter);
