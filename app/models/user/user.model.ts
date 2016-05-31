///<reference path="../../../typings/main.d.ts"/>

// ```
// user.model.ts
// (c) 2016 Jakub Szumiato
// jakub@szumiato.pl
// user.model.ts may be freely distributed under the MIT license
// ```

// */app/models/user/user.model.ts*

// ## User Model

// Note: MongoDB will autogenerate an _id for each User object created
// well need to hash passwords with help of crypto
import crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');

//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');

// Grab the Mongoose module
import mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
import {IUser} from '../../../shared/data-models/user.model.interfaces';


export class User implements IUser {
    username: string;
    password: string;
    email: string;
    role: string;

    constructor(data: {

        username: string,
        password: string,
        email: string,
        role: string
    }) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.password;
        this.role = data.role;
    }

    /* any method would be defined here*/
    validatePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
    
    generateHash(password: string): string {
        return bcrypt.hashSync(password);
    }
}


export interface IUserModel extends User, mongoose.Document {
}

let userSchema: mongoose.Schema = new mongoose.Schema({

    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    role: { type: String }
});


userSchema.method('validatePassword', User.prototype.validatePassword);
userSchema.method('generateHash', User.prototype.generateHash);

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model<IUserModel>('User', userSchema);