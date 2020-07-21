const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const Users = mongoose.model('Users', user);

module.exports = Users;