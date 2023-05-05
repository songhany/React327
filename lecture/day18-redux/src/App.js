import logo from './logo.svg';
import './App.css';
import TodoListAppuseContext from './components/TodoListAppContext';
import TodoListAppuseReducer from './components/TodoListAppReducer';
import LearnReducer from './components/LearnReducer/LearnReducer';

function App() {
  return (
    <div>
      <A a="a">
        <div>children element</div>
      </A>
      <LearnReducer />
      <TodoListAppuseContext />
      <TodoListAppuseReducer />
    </div>
  )
}

function A({a, children}) {
  console.log(children);
  return <div>
    {children}
  </div>
}

export default App;