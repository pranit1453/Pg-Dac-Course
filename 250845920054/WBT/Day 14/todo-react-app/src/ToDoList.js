import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggle={() => toggleTodo(index)}
          deleteItem={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
