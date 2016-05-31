///<reference path="../../../typings/main.d.ts"/>
"use strict";
var bcrypt = require('bcrypt-nodejs');
//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');
// Grab the Mongoose module
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var User = (function () {
    function User(data) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.password;
        this.role = data.role;
    }
    /* any method would be defined here*/
    User.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.prototype.generateHash = function (password) {
        return bcrypt.hashSync(password);
    };
    return User;
}());
exports.User = User;
var userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    role: { type: String }
});
userSchema.method('validatePassword', User.prototype.validatePassword);
userSchema.method('generateHash', User.prototype.generateHash);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', userSchema);
