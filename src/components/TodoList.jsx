import React from 'react';

const TodoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map(item => (
        <li key={item.id}>{item.item}</li>
      ))}
    </ul>
  </div>
);

export default TodoList;
