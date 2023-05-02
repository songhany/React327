import logo from './logo.svg';
import './App.css';
import React from 'react';
import Day1 from './components/day1/Day1';
import Day2 from './components/day2/Day2';
import Day3 from './components/day3/Day3';
import Day4 from './components/day4/Day4';
import Day5 from './components/day5/Day5';

function App() {
  return (
    <Day5/>
  );
}

export default App;


// keep components pure

// pure function
// 1. same input => same output
// 2. it should not produce side effects