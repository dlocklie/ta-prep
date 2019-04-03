import React from 'react';

function ToDoList (props) {
  const notCompleted = [];
  for (let i = props.todos.length - 1; i >= 0; i--) {
    let todoItem = props.todos[i];
    if (todoItem.completed === false) {
      notCompleted.push(todoItem);
    }
  }

  const listItems = notCompleted.map((todos) =>
  <li>{todos.title}</li>
  )

  return (
    <div>
      <h3>To-do list</h3>
      <ul>{listItems}</ul>
    </div>
  )
}

export default ToDoList;