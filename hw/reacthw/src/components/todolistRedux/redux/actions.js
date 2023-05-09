// actions
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const THEME_LIGHT = "LIGHT";
export const THEME_DARK = "DARK";

export const FETCH_TODOS = "FETCH_TODOS";
export const SET_TODOS = "SET_TODOS";

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: { title },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    payload: { id, title },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos,
  };
}

export function fetchTodos() {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const todos = await response.json();
    console.log(todos);
    dispatch(setTodos(todos));
  };
}
