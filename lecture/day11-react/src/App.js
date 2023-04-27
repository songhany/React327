import logo from './logo.svg';
import './App.css';
import React from 'react';
import Day3 from './components/day3/Day3';
import Immutable from './components/day3/Immutable'

function App() {
  return (
    <Immutable num={100}/>
  );
}

export default App;


// keep components pure

// pure function
// 1. same input => same output
// 2. it should not produce side effects