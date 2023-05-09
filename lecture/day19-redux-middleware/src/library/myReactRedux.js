import React from "react";
import { createContext, useContext, useEffect } from "react"
import useForceUpdate from "../hooks/useForceUpdate";

const MyReactReduxContext = createContext();

export function MyProvider({ children, store }) {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(forceUpdate);
  }, []);

  // useEffect(() => {
  //   console.log("MyProvider rerendered");
  // })

  return (
    <MyReactReduxContext.Provider value={{...store}}>
      {children}
    </MyReactReduxContext.Provider>
  )
}

export function useMySelector(selectorFn) {
  const store = useContext(MyReactReduxContext);
  const state = store.getState();

  return selectorFn(state);
  // return { value: 0 };
}

export function useMyDispatch() {
  const store = useContext(MyReactReduxContext);
  return store.dispatch;
}

export function myConnect(mapStateToProps, mapDispatchToProps) {
  return (InnerComponent) => {
    return class OuterComponent extends React.Component {
      static contextType = MyReactReduxContext;

      render() {
        const {getState, dispatch} = this.context;
        const stateToProps = mapStateToProps(getState());
        const dispatchToProps = mapDispatchToProps(dispatch);
        console.log(stateToProps);

        return (
          <InnerComponent {...this.props} {...stateToProps} {...dispatchToProps}/>
        );
      }
    }
  }
}