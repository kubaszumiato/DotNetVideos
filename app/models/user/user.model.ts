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
//var bcrypt = require('bcrypt');

//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');

// Grab the Mongoose module
import mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
import {IUser} from '../../../shared/data-models/user.model.interfaces';



export interface IUserModel extends IUser, mongoose.Document {
}

export /**
 * UserSchema
 */
    class UserSchema extends mongoose.Schema {

    generateHash(password) {

        return '';
        //   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // ### Check if password is valid
    validPassword(password) {

        //return bcrypt.compareSync(password, password);
        return '';
    };
}

let userSchema: UserSchema = new UserSchema({

    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    role: { type: String }
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model<IUserModel>('User', userSchema);