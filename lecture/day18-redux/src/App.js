import './App.css';
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';
import React from 'react';
import { useState, useEffect } from 'react';
import useForceUpdate from './hooks/useForceUpdate';
import {store} from './store';
// console.log(store);

// when app gets big, state relationship/management becomes complext
// redux helps with that by giving
// 1. single source of truth: global state
// 2. we use dispatch / reducers to update the state

function App() {
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(forceUpdate);
  }, []);
  
  return (
    <div>
      <Counter/>
      <AnotherCounter />
    </div>
  )
}

export default App;


// Redux per se is a global store, we can use it in any frontend library
// For React, in order to use Redux, we use react-redux library to connect Redux and React Application
