import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from "redux"

function counterReducer(
  state={
    value: 0
  }, 
  action
) {
  switch(action.type) {
    case "increment":
      return {value: state.value + 1}
    case "decrement":
      return {value: state.value - 1}

    default:
      return state;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
