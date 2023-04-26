import logo from './logo.svg';
import './App.css';
import React from 'react';
import Day1 from './components/Day1'


function App() {
  return (
    <Day1 />
  );
}

export default App;

// keep components pure

// pure function
// 1. same input => same output
// 2. it should not produce side effects