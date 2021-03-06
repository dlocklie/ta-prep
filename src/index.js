import React from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';
import Form from './form';
import ToDoList from './todoList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [''],
      newTodo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Axios.get('/todo-list')
    .then((res) =>{
      this.setState({
        todos: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
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
    this.setState({
      newTodo: ''
    })
  }

  handleClick(e) {
    e.preventDefault();
    let listItemValue = e.target.innerHTML;
    let curState = this.state.todos;
    console.log('listItemValue: ', listItemValue);
    for (let i = 0; i < curState.length; i++) {
      let currentTodo = curState[i];
      if (currentTodo.title === listItemValue) {
        let newObj= {
          completed: true,
          id: 1,
          title: currentTodo.title,
          userId: 1
        }
        curState[i] = newObj;
        this.setState({
          todos: curState
        })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>To-do's</h1>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} newTodo={this.state.newTodo}/>
        <ToDoList todos={this.state.todos} handleClick={this.handleClick}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));