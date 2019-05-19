import React from 'react';

const ListItem = ({ complete, onClick, children }) => (
  <li onClick={onClick} className={complete ? 'list-item-complete' : ''}>
    {children}
  </li>
);

export default ListItem;
