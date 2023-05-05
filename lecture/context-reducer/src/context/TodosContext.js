import { createContext, useReducer } from "react";

export const TodosContext = createContext();

const DEFAULT_TODOS = [
  {
    id: 1,
    title: "cook",
  },
  {
    id: 2,
    title: "code",
  },
];

let id = 3;

function todosReducer(prevTodos, action) {
  switch (action.type) {
    case "ADD_TODO":
      const title = action.payload;
      return [...prevTodos, { id: id++, title }];
    case "REMOVE_TODO":
      const idToRemove = action.payload;
      return prevTodos.filter((todo) => todo.id !== idToRemove);
    case "EDIT_TODO":
      // console.log(action.payload)
      const { id: idToEdit, newTitle } = action.payload;
      return prevTodos.map((todo) => {
        if (todo.id === idToEdit) {
          return { ...todo, title: newTitle };
        }
        return todo;
      });

    default:
      return prevTodos;
  }
}

export function TodosProvider({ children }) {
  const [todos, dispatchTodos] = useReducer(todosReducer, DEFAULT_TODOS);
  return (
    <TodosContext.Provider
      value={{
        todos,
        dispatchTodos,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}