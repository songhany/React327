import React, { Component } from 'react'
import Mimic from './Mimic'
import FetchAPIFunc from './FetchAPIFunc'
import Input from './Input'
import Todolist from './Todolist'

// difference between function vs class components
// funciton
// clean syntax
// use hooks to mimic lifecycle methods
// we don't have this keyword
// custom hooks

// class
// this keyword
// lifecycle methods
// HOC hell

export default function Day4() {

  return (
    <Todolist />
  )
}

