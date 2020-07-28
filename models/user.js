const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSChema = new Schema({
    name: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: false},
    phone: {type: String, required: false}
});

userSChema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};

userSChema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};


const Users = mongoose.model('User', userSChema);
module.exports = Users;