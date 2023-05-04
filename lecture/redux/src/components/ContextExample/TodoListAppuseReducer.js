import React, { useContext, useReducer } from 'react';
import { createContext, useState } from 'react';
import { TodosContext } from '../../context/TodosContext';
import { ThemeContext } from '../../context/ThemeContext';

// prop drilling is annoying
// Context helps avoid prop drilling
// Redux is more powerful than Context, it has other features that Context arenot able to do

const DEFAULT_TODOS = [
  {
    "id": 1,
    "title": "eat",
  },
  {
    "id": 2,
    "title": "run",
  },
  {
    "id": 3,
    "title": "code",
  },
]

let id = 4;

function todosReducer(prevTodos, action) {
  switch(action.type) {
    case "ADD_TODO":
      const title = action.payload;
      return [...prevTodos, {id: id++, title: title }];

    case "REMOVE_TODO":
      const idToRemove = action.payload;
      return prevTodos.filter((todo) => {
        // console.log("id", id);
        // console.log("todo in reducer", todo);
        return todo.id !== idToRemove;
      });

    case "EDIT_TODO":
      // console.log(action.payload);
      const {id: idToEdit, newTitle} = action.payload;
      // console.log(newTitle);

      return prevTodos.map(todo => {
        if (todo.id === idToEdit) {
          return {...todo, title: newTitle};
        }
        return todo;
      });

    default:
      return prevTodos;
  }  
}

function TodoListApp() {
  // const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [todos, dispatchTodos] = useReducer(todosReducer, DEFAULT_TODOS)

  return (
    <div>
      {/* <Special> Component: All children of Special Component, they can access the variable provided by Special Component */}
      {/* <TodosContext.Provider> is special component that will provide information about everything about todos, 'value' property will be shared across all children */}
      <TodosContext.Provider 
        value={{
          todos,
          dispatchTodos,
        }}
      >
        <NewTodoForm />
        <TodoList todos={todos}/>
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

function Todo({ todo }) {
  const { dispatchTodos } = useContext(TodosContext);
  const [ editing, setEditing ] = useState(false);
  const [ newTitle, setNewTitle ] = useState("");

  return editing ? ( 
    <div>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button 
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
      <button onClick={() => setEditing(false)}>cancel</button>
    </div>
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
