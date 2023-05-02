import React, { useState } from "react";

export default function TodolistFunction() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  function addTodo() {
    const newTodo = {
      id: Math.random(),
      userId: 1,
      title: newTitle,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTitle("");
  }

  function removeTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function editTodo(todoId) {
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

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={() => addTodo()}>ADD todo</button>

      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.title}
              <button onClick={() => removeTodo(todo.id)}>REMOVE</button>
              <button onClick={() => editTodo(todo.id)}>EDIT</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}