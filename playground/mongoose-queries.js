const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a88d53a6c1374ac5c902b4d';
var userId = '5a8859b5679488f242838941';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User by ID: ', user);
}).catch((e) => console.log(e));


// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id: ', todo);
// }).catch((e) => console.log(e));


