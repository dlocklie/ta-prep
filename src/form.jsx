import React from 'react';

const Form = (props) => {

  return (
    <div>
      <h2>Add a Todo</h2>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder='new todo' value={props.newTodo} onChange={props.handleChange}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Form;