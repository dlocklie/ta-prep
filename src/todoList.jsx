import React from 'react';

function ToDoList (props) {


  const listItems = props.todos.map((todos) =>
  <li>{todos.title}</li>
  )

  return (
    <div>
      <p>To do list</p>
      <ul>{listItems}</ul>
    </div>
  )
}

export default ToDoList;