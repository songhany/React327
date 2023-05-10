import React, { useContext, useEffect } from 'react';
import useForceUpdate from './hooks/useForceUpdate';

const MyRouterContext = React.createContext(null);

export function MyRoute({ path, children }) {
  // console.log(window.location.pathname);
  // ### It just needs to call useContext to become a consumer,
  // because only Context's consumers will rerender
  useContext(MyRouterContext);  // Context's consumers. Call useContext() will make this function component become consumer.
  if (path === window.location.pathname) {
    return children;
  }
}

export function MyBrowserRouter({ children }) {
  const forceUpdate = useForceUpdate();

  function pushState(state, unused, url) {
    window.history.pushState(state, unused, url);
    forceUpdate();
  }
  // we only need to forceUpdate the 'Provider', the component of Provider
  // when this component rerenders, 
  // all of the Context's consumers will rerender
  return <MyRouterContext.Provider value={pushState}>
    {children}
  </MyRouterContext.Provider>
  // if you put {children} in above position it will not rerender. If you put <ChildComponent /> instead of {children}, the <ChildComponent /> should rerender. 
}

export function MyLink({ to, children }) {
  // useEffect(() => {
  //   console.log("link rerenders");
  // })
  const pushState = useContext(MyRouterContext);  // Context's consumers

  function handleClick(e) {
    e.preventDefault();
    pushState(null, null, to);
  }

  return <a href={to} onClick={handleClick}>
    {children}
  </a>
}