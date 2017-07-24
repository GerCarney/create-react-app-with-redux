import React from 'react';

const TodoInput = ({addTodo}) => {

  let message = '';

  const handleAddTodo = () => {
    console.log('The Message', message.value);
    addTodo(message.value);
    message.value = '';
  }

  return (
    <div>
      <input ref={node => {message = node}} type="text"/>
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );

}

export default TodoInput;
