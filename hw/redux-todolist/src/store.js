import { createStore } from 'redux';

// reducers
const initialState = {
  todos: [],
  newTitle: ""
};

function todolistReducerreducer(state = initialState, action)  {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        completed: false
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case 'REMOVE_TODO':
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      return { ...state, todos: updatedTodos };

    case 'EDIT_TODO':
      const editedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo,  completed: true, title: action.payload.title};
        }
        return todo;
      });
      return { ...state, todos: editedTodos };

    case 'TOGGLE_TODO':
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

const store = createStore(todolistReducerreducer);

export default store;