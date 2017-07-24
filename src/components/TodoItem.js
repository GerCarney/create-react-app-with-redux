import React from 'react';

const TodoItem = ({todo, onClicked}) => {
  let styles = {
    padding:'10px',
    borderBottom:'1px solid #ddd'
  }

  return <div onClick={onClicked} style={styles}>
    {todo.text}
  </div>
}



export default TodoItem;
