import React from 'react';
import ListItem from './ListItem.jsx';

const TodoList = ({ todos, onTodoClick, visibilityFilter }) => {
  let list = [];
  if (visibilityFilter === 'SHOW_COMPLETE') {
    list = todos.filter(todo => todo.complete);
  } else if (visibilityFilter === 'SHOW_ACTIVE') {
    list = todos.filter(todo => !todo.complete);
  } else {
    list = todos; //assuming filter === 'SHOW_ALL'
  }

  return (
    <div>
      <ul>
        {list.map(item => (
          <ListItem
            key={item.id}
            complete={item.complete}
            onClick={() => onTodoClick(item.id)}
          >
            {item.item}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
