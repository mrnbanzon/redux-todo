import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    };
    this.AddTodo = this.AddTodo.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }

  AddTodo(item) {
    let { todos } = this.state;
    todos.push({
      id: todos.length,
      complete: false,
      item
    });
    this.setState({ todos });
  }

  setVisibilityFilter(visibilityFilter) {
    this.setState({
      visibilityFilter
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <AddTodo addTodo={this.AddTodo} />
        <TodoList todos={this.state.todos} />
        <Footer
          visiblityFilter={this.state.visibilityFilter}
          setVisiblityFilter={this.setVisibilityFilter}
        />
      </React.Fragment>
    );
  }
}

export default App;
