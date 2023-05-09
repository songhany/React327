import { applyMiddleware, createStore } from "redux";
import { myCreateStore } from "../library/myRedux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
  // console.group(action.type);
  // console.info("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  // console.groupEnd();
  return result;
};

// const delayBy1s = store => next => action => {
//   setTimeout(() => {
//     return next(action)
//   }, 1000) 
// }

// const myThunk = store => next => action => {
//     let result;
//     if(typeof action === "function"){
//         action(next)
//     } else {
//         result = next(action)
//     }
//     return result
// }


// middleware intercepts your actions and perform some actions
// a place where we can incur side effects


export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// export const myStore = myCreateStore(counterReducer);

// store.subscribe(() => console.log("sth. happened"));
// store.subscribe(() => console.log("sth."));
// store.dispatch({type: "increment"})
// store.dispatch({type: "increment"})