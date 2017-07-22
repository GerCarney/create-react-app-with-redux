import React, { Component } from 'react';

const TodoList = ({todos}) => (
  <div>
  {todos.map(todo =>
          <li key={todo.id}>{todo.text}</li>
        )}
  </div>
);

export default TodoList;
