import { createContext, useContext } from "react"

const ReactReduxContext = createContext();

export function MyProvider({ children, store }) {
  return (
    <ReactReduxContext.Provider value={store}>
      {children}
    </ReactReduxContext.Provider>
  )
}


export function useMySelector() {
  const store = useContext(ReactReduxContext);
  console.log(store.getState());

  return { value: 0 };
}


export function useMyDispatch() {

}
