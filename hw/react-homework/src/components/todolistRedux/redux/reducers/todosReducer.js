import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO, SET_TODOS } from "../actions";

const initialState = {  // the initial State of the app 
  todos: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case REMOVE_TODO:
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      return { ...state, todos: updatedTodos };

    case EDIT_TODO:
      const editedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
      return { ...state, todos: editedTodos };

    case TOGGLE_TODO:
      const toggledTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: toggledTodos };

    case SET_TODOS:
      console.log("action.payload", action.payload);
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}


// If you want to use 'state.todos' instead of 'state.todos.todos' in TodolistRedux.js, you need to update the initial state in the todosReducer to be just an empty array, like this:
// const initialState = []

// Then, in the todosReducer, you need to update the return statements to just return the array instead of an object with the todos key, like this:
// export default function todosReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       const newTodo = {
//         id: state.length + 1,
//         title: action.payload.title,
//         completed: false,
//       };
//       return [...state, newTodo];
    
//     case REMOVE_TODO:
//       const updatedTodos = state.filter((todo) => todo.id !== action.payload.id);
//       return updatedTodos;
    
//     case EDIT_TODO:
//       const editedTodos = state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, title: action.payload.title };
//         }
//         return todo;
//       });
//       return editedTodos;
    
//     case TOGGLE_TODO:
//       const toggledTodos = state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       return toggledTodos;
    
//     case SET_TODOS:
//       return action.payload;

//     default:
//       return state;
//   }
// }


// Finally, in your 'TodoListRedux.js' component, you need to update the useSelector hook to just reference state.todos:
// const todos = useSelector(state => state.todos);
