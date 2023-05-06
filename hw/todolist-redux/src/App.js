import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './components/actions';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(text));
    setText('');
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;