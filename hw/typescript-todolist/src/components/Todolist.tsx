import React, { useState } from "react";
import { Todo } from "../type/todo";

export default function Todolist() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");

  function addTodo() {
    const newTodo:Todo = {
      id: Math.random(),
      userId: 1,
      title: newTitle,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos );
    setNewTitle("");
  }

  function removeTodo(todoId: number) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function editTodo(todoId: number, newTitle: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: newTitle };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    setNewTitle("");
  }

  function toggleTodo(todoId: number) {
    const toggledTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(toggledTodos);
  }

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <input className='todo-input' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Add new todo'/>
      <button className='add__btn' onClick={addTodo}>ADD todo</button>

      <div className="todo-item-container">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className='todo-item' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
              
              <span className='todo-actions'> 
                <button className='edit__btn' onClick={() => editTodo(todo.id, newTitle)}>EDIT</button>
                <button className='remove__btn' onClick={() => removeTodo(todo.id)}>REMOVE</button>
                <button className='complete__btn' onClick={() => toggleTodo(todo.id)}>COMPLETE</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}