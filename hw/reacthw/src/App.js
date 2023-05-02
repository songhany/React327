import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/counter/ClassCounter';
import FuncctionCounter from './components/counter/FunctionCounter'
// import SelectAllFormClass from './components/selectAllForm/SelectAllFormClass'
// import SelectAllFormFunc from './components/selectAllForm/SelectAllFormFunc';
import SelectAllFormClass from './components/beforeRefactor/SelectAllFormClass'
import SelectAllFormFunc from './components/beforeRefactor/SelectAllFormFunc'
import TodolistClass from './components/todolist/TodolistClass';
import TodolistFun from './components/todolist/TodolistFun'
import AddTwoNumber from './components/addTwoNumber/AddTwoNumber'

function App() {
  return (
    <div>
      <AddTwoNumber />
    </div>
  );
}

export default App;