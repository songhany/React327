import { createStore } from 'redux';
import { myCreateStore } from './library/myRedux';

function counterReducer (
  state = {
    value: 0,
  },
  action
) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// console.log(counterReducer(undefined, {type:""}))

// export const store = createStore(counterReducer);
export const store = myCreateStore(counterReducer);

store.subscribe(() => console.log("sth. happened"));
store.subscribe(() => console.log("sth."));
store.dispatch({type: "increment"})
store.dispatch({type: "increment"})