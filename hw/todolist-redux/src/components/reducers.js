import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        text: action.payload.text,
        completed: false
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case TOGGLE_TODO:
      const toggledTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: toggledTodos };
    default:
      return state;
  }
}

export default reducer;