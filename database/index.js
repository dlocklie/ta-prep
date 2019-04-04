var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('You are now connected to database!');
  }
})

let getTodos = function(callback) {
  connection.query(('SELECT * FROM todos'), (err, data) => {
    if (err) {
      callback(err)
    } else {
      console.log('Data retrieved!', data);
      callback(null, data);
    }
  })
}

let insertNewTodo = function(DataObj) {
  connection.query((`INSERT INTO todos (entryId, title, completed, userId) VALUES (${DataObj.id},'${DataObj.title}', ${DataObj.completed}, ${DataObj.userId})`), (err, success) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Inserted Data');
    }
  })
}


module.exports = {
  getTodos,
  insertNewTodo
}
