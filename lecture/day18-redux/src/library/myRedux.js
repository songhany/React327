export function myCreateStore(reducer) {
  let state = reducer(undefined, {type: "abc"})
  let subFns = [];

  function dispatch(action) {  // change state
    state = reducer(state, action);
    subFns.forEach((subFn) => subFn());
  }

  function getState() {
    return state;
  }

  function subscribe(cb) {
    subFns.push(cb);
  }

  return {
    dispatch,
    getState,
    subscribe,
  }
}