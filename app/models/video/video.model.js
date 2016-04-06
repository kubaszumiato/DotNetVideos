///<reference path="../../../typings/main.d.ts"/>
"use strict";
// ```
// video.model.js
// (c) 2016 Jakub Szumiato
// kuba.szumiato@gmail.com
// video.model.js may be freely distributed under the MIT license
// ```
// */app/models/video.model.js*
// ## Video Model
// Note: MongoDB will autogenerate an _id for each Todo object created
// Grab the Mongoose module and some references
var mongoose = require('mongoose');
//import User from '../user/user.model';
// Create a `schema` for the `video` object
var VideoSchema = new mongoose.Schema({
    title: { type: String },
    url: { type: String },
    localUrl: { type: String },
    code: { type: String },
    mediaType: { type: String },
    videoLength: { type: Number },
    videoOrigin: { type: String },
    tags: { type: Array },
    rating: { type: Number },
    owner: { type: String },
    watchedCount: { type: Number }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Video', VideoSchema);
//export default mongoose.model('Video', VideoSchema);
// import mongoose from 'mongoose';
// // Create a `schema` for the `Todo` object
// let todoSchema = new mongoose.Schema({
//   text: { type : String }
// });
// // Expose the model so that it can be imported and used in
// // the controller (to search, delete, etc.)
// export default mongoose.model('Todo', todoSchema);
///this works fine on the js level
// var mongoose = require('mongoose');
// let VideoSchema = new mongoose.Schema({
//     title: { type: String },
//     url: { type: String },
//     code: { type: String },
//     mediaType: { type: String },
//     length: { type: Number },
//     rating: { type: Number },
// });
// // Expose the model so that it can be imported and used in
// // the controller (to search, delete, etc.)
// export default mongoose.model('Video', VideoSchema); 
