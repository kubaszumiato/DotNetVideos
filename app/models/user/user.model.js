///<reference path="../../../typings/main.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//var bcrypt = require('bcrypt');
//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');
// Grab the Mongoose module
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var UserSchema = (function (_super) {
    __extends(UserSchema, _super);
    function UserSchema() {
        _super.apply(this, arguments);
    }
    UserSchema.prototype.generateHash = function (password) {
        return '';
        //   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    ;
    // ### Check if password is valid
    UserSchema.prototype.validPassword = function (password) {
        //return bcrypt.compareSync(password, password);
        return '';
    };
    ;
    return UserSchema;
}(mongoose.Schema));
exports.UserSchema = UserSchema;
var userSchema = new UserSchema({
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    role: { type: String }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', userSchema);
