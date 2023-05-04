import React, { useContext } from 'react';
import { createContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext';
import { ThemeContext } from '../context/ThemeContext';

// prop drilling is annoying
// Context helps avoid prop drilling
// Redux is more powerful than Context, it has other features that Context arenot able to do

const DEFAULT_TODOS = [
  {
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
]

function TodoListApp() {
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  return (
    <div>
      {/* <Special> Component: All children of Special Component, they can access the variable provided by Special Component */}
      {/* <TodosContext.Provider> is special component that will provide information about everything about todos, 'value' property will be shared across all children */}
      <TodosContext.Provider 
        value={{
          todos,
          setTodos
        }}
      >
        <NewTodoForm />
        <TodoList todos={todos} setTodos={setTodos}/>
      </TodosContext.Provider>
    </div>
  );
}

function TodoList({ setTodos }) {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}

function Todo({ todo, setTodos }) {
  const obj = useContext(TodosContext);  // useContext() can access value that provide by Provider. 'TodosContext' specify it access information of TodosContext 
  console.log(obj.setTodos);

  function handleDelete() {
    // console.log(todo.id);
    obj.setTodos(prev => prev.filter(t => t.id !== todo.id))
  }

  return (
    <div>
      <div>{todo.title}</div>
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

function NewTodoForm() {
  return (
    <form>
      <input />
      <button>add</button>
    </form>
  )
}

export default TodoListApp;
