import react, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, editTodo, toggleTodo, fetchTodos } from '../redux/actions';

export default function TodolistRedux() {
  const dispatch = useDispatch();
  const todos = useSelector(state => {
      console.log("state", state)
      return state.todos.todos
    }
  );
  console.log(todos)
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

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
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <input
        className="todo-input"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Add new todo"
      />
      <button className="add__btn" onClick={handleAddTodo}>
        ADD todo
      </button>

      <div className="todo-item-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}

            <span className="todo-actions">
              <button className="edit__btn" onClick={() => handleEditTodo(todo.id, newTitle)}>
                EDIT
              </button>
              <button className="remove__btn" onClick={() => handleRemoveTodo(todo.id)}>
                REMOVE
              </button>
              <button className="complete__btn" onClick={() => handleToggle(todo.id)}>
                COMPLETE
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}