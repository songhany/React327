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

    return function unsubscribe() {
      subFns = subFns.filter(l => l !== cb);
    };
  }

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState,
    subscribe,
  }
}