import { useState } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux';
import store from '../store';
import { addTodo, removeTodo, editTodo, toggleTodo } from './actions';

export default function TodolistRedux() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
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
        <input className='todo-input' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Add new todo'/>
        <button className='add__btn' onClick={handleAddTodo}>ADD todo</button>

        <div className="todo-item-container">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className='todo-item' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
                
                <span className='todo-actions'> 
                  <button className='edit__btn' onClick={() => handleEditTodo(todo.id, newTitle)}>EDIT</button>
                  <button className='remove__btn' onClick={() => handleRemoveTodo(todo.id)}>REMOVE</button>
                  <button className='complete__btn' onClick={() => handleToggle(todo.id)}>COMPLETE</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Provider>
  );
}