// actions
export function addTodo(title) {
  return {
    type: 'ADD_TODO',
    payload: { title }
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: { id }
  };
}

export function editTodo(id, title) {
  return {
    type: 'EDIT_TODO',
    payload: { id, title }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  };
}