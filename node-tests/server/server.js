const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.status(404).send('Hello World!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

var users = [
  {
    name: 'Masahiro1',
    age: 7
  },
  {
    name: 'Masahiro2',
    age: 10
  },
  {
    name: 'Masahiro3',
    age: 20
  }
]

app.get('/users', (req, res) => {
  res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;
