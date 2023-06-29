import './App.css';
import Counter from './components/Counter';
import CounterBackup from './components/CounterBackup';
import AnotherCounter3UseSelector from './components/AnotherCounter3UseSelector';
import React from 'react';
import { useState, useEffect } from 'react';
import useForceUpdate from './hooks/useForceUpdate';
import { store } from './redux/store';

import { Provider } from 'react-redux';
import { MyProvider } from './library/myReactRedux';
import ClassCounter from './components/ClassCounter';

// console.log(store);

// when app gets big, state relationship/management becomes complext
// redux helps with that by giving
// 1. single source of truth: global state
// 2. we use dispatch / reducers to update the state

function App() {
  // const forceUpdate = useForceUpdate();
  // useEffect(() => {
  //   store.subscribe(forceUpdate);
  // }, []);
  
  return (
    <Provider store={store}>
      {/* <Counter/> */}
      {/* <CounterBackup/> */}
      <AnotherCounter3UseSelector />
      <ClassCounter />
    </Provider>

    // <MyProvider store={store}>
    //   <Counter/>
    //   {/* <CounterBackup/> */}
    //   <AnotherCounter3UseSelector />
    //   <ClassCounter />
    // </MyProvider>
  )
}

export default App;


// Redux per se is a global store, we can use it in any frontend library
// For React, in order to use Redux, we use react-redux library to connect Redux and React Application

// Redux is not responsible for re-rendering app, it's just global state management.
// 'react-redux' is responsible for triggering re-renders of your React UI when the state managed by your Redux store changes.
// When using react-redux, you connect your React components to the Redux store using the connect function or the useSelector hook. This allows your components to subscribe to changes in the Redux store, and to access the relevant parts of the store state as props or values.
// When the store state changes, react-redux detects the change and triggers a re-render of the connected components that depend on the changed part of the store state. This ensures that your UI stays in sync with the store state.
// It's worth noting that react-redux doesn't actually render anything itself. It simply provides the mechanism for connecting your Redux store to your React components, and relies on React's built-in rendering mechanism to actually update the UI. So ultimately, it's React that is responsible for rendering your UI in response to changes in the store state.
