import { useState } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from '../store';
import { addTodo, removeTodo, editTodo, toggleTodo } from './actions';

export default function TodolistRedux() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");

  function handleAddTodo() {
    dispatch(addTodo(newTitle));
    // setNewTitle("");  // whether clear input box
  }

  function handleRemoveTodo(todoId) {
    dispatch(removeTodo(todoId));
  }

  function handleEditTodo(todoId, newTitle) {
    dispatch(editTodo(todoId, newTitle));
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }

  return (
    <Provider store={store}>
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button onClick={handleAddTodo}>ADD todo</button>

        <div className="todo-item-container">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className='todo-item' onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
                
                <button onClick={() => handleRemoveTodo(todo.id)}> REMOVE</button>
                <button onClick={() => handleEditTodo(todo.id, newTitle)}> EDIT</button>
              </div>
            );
          })}
        </div>
      </div>
    </Provider>
  );
}