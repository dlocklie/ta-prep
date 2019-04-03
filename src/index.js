import React from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';
import Form from './form';
import ToDoList from './todoList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: ['stuff', 'grocery-shopping'],
      newTodo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.setState({
        todos: res.data
      });
    });
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let modifiedTodos = this.state.todos;
    let newObj = {
      completed: false,
      id: 1,
      title: this.state.newTodo,
      userId: 1
    }
    modifiedTodos.push(newObj);
    this.setState({
      todos: modifiedTodos
    });
  }

  render() {
    return (
      <div>
        <h1>To-do's</h1>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} newTodo={this.state.newTodo}/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
