import React, { useContext, useEffect, useReducer } from 'react';
import { createContext, useState } from 'react';
import { TodosContext, TodosProvider } from '../context/TodosContext';
import { ThemeContext } from '../context/ThemeContext';

// prop drilling is annoying
// Context helps avoid prop drilling
// Redux is more powerful than Context, it has other features that Context arenot able to do

function TodoListApp() {
  // const [todos, setTodos] = useState(DEFAULT_TODOS);

  return (
    <div>
      {/* <Special> Component: All children of Special Component, they can access the variable provided by Special Component */}
      {/* <TodosContext.Provider> is special component that will provide information about everything about todos, 'value' property will be shared across all children */}
      <TodosProvider>
        <NewTodoForm />
        <TodoList/>
      </TodosProvider>
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

function Todo({ todo }) {
  const { dispatchTodos } = useContext(TodosContext);
  const [ editing, setEditing ] = useState(false);
  const [ newTitle, setNewTitle ] = useState(todo.title);
  useEffect(() => {
    setNewTitle(todo.title)
  }, [todo])

  return editing ? ( 
    // onSubmit={e => e.preventDefault()} make us can 'Enter carriage return' to save the change
    <form onSubmit={e => e.preventDefault()}> 
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button
        type='submit' 
        onClick={() => {
          dispatchTodos({
            type: "EDIT_TODO", 
            payload: {
              id: todo.id,
              newTitle: newTitle
            },
          });
          setEditing(false);
        }}>save</button>
      <button type='button' onClick={() => setEditing(false)}>cancel</button>
    </form>
  ) : (
    <div>
      <div>{todo.title}</div>
      <button onClick={() => dispatchTodos({type: "REMOVE_TODO", payload: todo.id })}>delete</button>
      <button onClick={() => setEditing(true)}>edit</button>
    </div>
  )
}


function NewTodoForm() {
  const [newTodoTitle, setNewTodoTitle ] = useState("");
  const { dispatchTodos } = useContext(TodosContext);

  function handleAddTodo(e) {
    e.preventDefault();
    dispatchTodos({type: "ADD_TODO", payload: newTodoTitle });

  }

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        value={newTodoTitle} 
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button>add</button>
    </form>
  )
}

export default TodoListApp;
