import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

const App = () => (
  <React.Fragment>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    <Footer />
  </React.Fragment>
);

export default App;
