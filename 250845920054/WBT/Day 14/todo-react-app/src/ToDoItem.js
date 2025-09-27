import React from 'react';

function TodoItem({ todo, toggle, deleteItem }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={toggle}>✔</button>
      <button onClick={deleteItem}>🗑</button>
    </li>
  );
}

export default TodoItem;
