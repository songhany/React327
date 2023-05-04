import logo from './logo.svg';
import './App.css';
import TodoListApp from './components/ContextExample/TodoListApp';
import TodoListAppuseReducer from './components/ContextExample/TodoListAppuseReducer';
import LearnReducer from './components/LearnReducer/LearnReducer';

function App() {
  return (
    <div>
      {/* <TodoListApp /> */}
      {/* <LearnReducer /> */}
      <TodoListAppuseReducer />
    </div>
  )
}

export default App;
