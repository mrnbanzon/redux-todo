import React from 'react';

const TodoList = ({ list }) => (
  <div>
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.item}</li>
      ))}
    </ul>
  </div>
);

export default TodoList;
