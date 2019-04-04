const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database');
const app = express();
const axios = require('axios')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./dist"));

let placeHolderTodos;

axios.get('https://jsonplaceholder.typicode.com/todos') 
  .then((res) => {
    placeHolderTodos = res.data;
    for (let i = 0; i < placeHolderTodos.length; i++) {
      let curTodo = placeHolderTodos[i];
      db.insertNewTodo(curTodo);
    }
  })
  .catch((err) => {
    throw(err);
  })

app.get('/todo-list', (req, res) => {
  db.getTodos((err, data) => {
    if (err) {
      res.end();
    } else {
      res.send(data);
    }
  })
})

app.listen(3000, () => console.log("Now listening on port 3000!"));
