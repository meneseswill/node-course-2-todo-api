const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5973a81662784267b60d28dd'}).then((result)=>{

});

// Todo.findByIdAndRemove('5973a81662784267b60d28dd').then((todo)=>{
//   console.log(todo);
// });
