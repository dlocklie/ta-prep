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
      newTodo: null
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
      newTodo: {title: event.target.value, completed: false}
    })
  }

  handleSubmit(event) {
    this.setState({
      todos: [...this.state.todos, event.target.value]
    })
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
