// ```
// user.model.ts
// (c) 2016 Jakub Szumiato
// blackshuriken@hotmail.com
// user.model.ts may be freely distributed under the MIT license
// ```

// */app/models/user.model.ts*

// ## User Model

// Note: MongoDB will autogenerate an _id for each User object created
// well need to hash passwords with help of crypto
import crypto = require('crypto');

//body-parser requires python so for now let's say goodbye to this module
//import bodyParser = require('body-parser');

// Grab the Mongoose module
import mongoose = require('mongoose');

// ## Methods

// ### Generate a hash
//userSchema.methods.generateHash = function(password) {

//return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//};

// ### Check if password is valid
//userSchema.methods.validPassword = function(password) {

//return bcrypt.compareSync(password, this.local.password);
//};

export interface IUser extends mongoose.Document {
    local: {
        username: { type: String, unique: Boolean },
        password: { type: String },
        email: { type: String }
    },

    role: {
        type: { type: String }
    }
}

export default class User {

    userSchema = new mongoose.Schema({

        local: {
            username: { type: String, unique: true },
            password: String,
            email: { type: String, unique: true }
        },

        role: { type: String }
    });

    generateHash = function(password: String) {

    }

    validPassword = function(password: String) {

    }

    // Expose the model so that it can be imported and used in
    // the controller (to search, delete, etc.)
    userModel = mongoose.model<IUser>('User', this.userSchema);

}