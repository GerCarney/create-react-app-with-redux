import React, { Component } from 'react';

const TodoItem = ({todo, onClicked}) => (
  <div onClick={onClicked}>
    {todo.text}
  </div>
);



export default TodoItem;
