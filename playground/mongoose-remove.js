const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5baaf87ba67b8ab967c65b39'}).then(todo);

Todo.findByIdAndRemove('5baaf87ba67b8ab967c65b39').then((todo) => {
  console.log(todo);
});
