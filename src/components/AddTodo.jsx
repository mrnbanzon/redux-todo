import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.textInput.current.value);
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
