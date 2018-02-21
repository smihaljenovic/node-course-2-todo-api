const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id= '5a8c7077b909fa8e332ad4bb11';

if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then(todos => {
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) return console.log('Id not found');
//
//    console.log('Todo by Id', todo);
// }).catch(e => console.log(e));


User.findById('5a8c64a8642a0b8b4d2c315d').then(user => {
    if (!user) return console.log('Unable to find user');

    console.log(JSON.stringify(user, undefined, 2));
}, e => {
    console.log(e);
});
