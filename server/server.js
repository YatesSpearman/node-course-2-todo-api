var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/12341234

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate id using isValid
    //404 -send back empty body (call send empty)
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
  //findById
  Todo.findById(id).then((todo) => {
    if(!todo){
      res.status(404).send();
    } else {
    res.send({todo});
    }
  }, (e) => {
    res.status(400).send();
  });
    //success
      //if todo-send back
      //if no todo -send back 404 with an empty body
    //error
      //400 -send nothing
});

// app.post('/users', (req, res) => {
//   var user = new User({
//     email: req.body.email
//   });
//
//   user.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });



app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
