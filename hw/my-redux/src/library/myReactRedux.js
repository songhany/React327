import { createContext, useContext, useEffect } from "react"
import useForceUpdate from "../hooks/useForceUpdate";

const ReactReduxContext = createContext();


export function MyProvider({ children, store }) {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(forceUpdate);
  }, []);

  // useEffect(() => {
  //   console.log("MyProvider rerendered");
  // })

  return (
    <ReactReduxContext.Provider value={{...store}}>
      {children}
    </ReactReduxContext.Provider>
  )
}


export function useMySelector(selectorFn) {
  const store = useContext(ReactReduxContext);
  const state = store.getState();

  return selectorFn(state);
  // return { value: 0 };
}


export function useMyDispatch() {
  const store = useContext(ReactReduxContext);
  return store.dispatch;
}
