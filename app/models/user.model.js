// ```
// user.model.ts
// (c) 2016 Jakub Szumiato
// blackshuriken@hotmail.com
// user.model.ts may be freely distributed under the MIT license
// ```
"use strict";
//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');
// Grab the Mongoose module
var mongoose = require('mongoose');
var User = (function () {
    function User() {
        this.userSchema = new mongoose.Schema({
            local: {
                username: { type: String, unique: true },
                password: String,
                email: { type: String, unique: true }
            },
            role: { type: String }
        });
        this.generateHash = function (password) {
        };
        this.validPassword = function (password) {
        };
        // Expose the model so that it can be imported and used in
        // the controller (to search, delete, etc.)
        this.userModel = mongoose.model('User', this.userSchema);
    }
    return User;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
