import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.AddTodo = this.AddTodo.bind(this);
  }

  AddTodo(item) {
    let { list } = this.state;
    list.push({
      id: list.length,
      complete: false,
      item
    });
    this.setState({ list });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <AddTodo addTodo={this.AddTodo} />
        <TodoList list={this.state.list} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
