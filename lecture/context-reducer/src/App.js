import logo from './logo.svg';
import './App.css';
import TodoListAppuseContext from './components/TodoListAppContext';
import TodoListAppuseReducer from './components/TodoListAppReducer';
import LearnReducer from './components/LearnReducer/LearnReducer';

function App() {
  return (
    <div>
      {/* <LearnReducer />
      <TodoListAppuseContext /> */}
      <TodoListAppuseReducer />
    </div>
  )
}


export default App;
