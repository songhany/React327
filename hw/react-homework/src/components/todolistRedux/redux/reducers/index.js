import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});

export default rootReducer;