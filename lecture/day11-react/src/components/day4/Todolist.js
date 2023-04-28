import React, { useState, useEffect } from "react";

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 5));
      });
  }, []);

  function handleAddTodo() {
    const newTodo = {
      // NEVER DO THIS Math.random() for id 
      id: Math.random(),
      userId: 1,
      title: newTitle,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todolis</h1>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={handleAddTodo}>ADD todo</button>
      <div>
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </div>
  );
}