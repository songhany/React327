import React, { Component } from 'react'
import { connect } from 'react-redux'
import myConnect from '../library/myConnect';

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
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  // how we read 'state.value' inside class component
  return {
    count: state.value
  }
}

// ### 1st Way
// const mapDispatchToProps = (dispatch) => {
//   return {dispatch}
// };

// ### 2nd Way
const mapDispatchToProps = {
  increment: () => ({type: 'increment'}),
  decrement: () => ({type: 'decrement'}),
}

// connect() is a higher order component that allows class components to 
// read states from store and also dispatch actions
// export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
export default myConnect(mapStateToProps, mapDispatchToProps)(ClassCounter);