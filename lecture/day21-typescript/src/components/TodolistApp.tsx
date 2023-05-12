import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Todo } from '../type/todo';
import Todolist from './Todolist';

// js is dynamically typed, interpreted at run-time
// ts is statically typed, a compiled language

// type Todo = {

// }

let id = 0;

export default function TodolistApp() {
  // const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res:Response) => res.json())
    .then(data => {  // ts compiler cannot aware what kind of type of data return from API, so ts won't give you warning if data is the wrong type
      // setTodos(data)
    })
  }, [])

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo: Todo = {
      id: id++,
      title: input,
      completed:false
    }
    setTodos(prev => [...prev, newTodo ])
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        {/* <textarea onChange={handleChange}></textarea> */}
        <input value={input} onChange={handleChange}/>
        <button>add todo</button>
      </form>
      <Todolist todos={todos}/>
    </div>
  );
}
