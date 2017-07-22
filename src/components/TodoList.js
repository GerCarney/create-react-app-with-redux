import React, { Component } from 'react';
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo}) => (
  <div>
  {todos.map(todo =>
          <TodoItem key={todo.id} todo={todo} onClicked={() => removeTodo(todo.id)}></TodoItem>
        )}
  </div>
);



export default TodoList;
