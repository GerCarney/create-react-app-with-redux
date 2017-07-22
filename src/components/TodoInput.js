import React, { Component } from 'react';

class TodoInput extends Component {

  addTodo = () => {
    console.log('The Message',this.message.value);
    this.props.addTodo(this.message.value);
    this.message.value = '';
  }

  render() {
    return (
      <div>
        <input ref={node => {this.message = node}} type="text"/><button onClick={this.addTodo}>Add todo</button>
      </div>
    );
  }
}




export default TodoInput;
