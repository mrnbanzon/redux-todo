import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let input = this.textInput.current.value;
    if (input.length > 0) {
      this.props.addTodo(input);
    }
    this.textInput.current.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
