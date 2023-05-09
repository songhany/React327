// incomplete code

export const FETCH_TODOS = "FETCH_TODOS";
export const SET_TODOS = "SET_TODOS";

export function todosReducer(state = [], action) {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
  }
}

export function fetchTodos() {
  return async (dispatch) => {
    const res = await fetch("url");
    const data = await res.json();
    dispatch(setTodos(data));
  };
}

export function setTodos(todos) {
  return { type: SET_TODOS, payload: todos };
}