import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import TodolistApp from './components/TodolistApp';
// import { Todo } from './components/Todo';
import { Todo } from './type/todo';
import Card from './components/Card/Card';


export default function App() {
  return (
    // <TodolistApp />
    <Card title="Card title" body="Card body"/>
  )
}