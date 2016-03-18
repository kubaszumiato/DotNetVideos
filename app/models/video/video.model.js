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
// Grab the Mongoose module
var mongoose = require('mongoose');
;
exports.VideoSchema = new mongoose.Schema({
    title: { type: String },
    url: { type: String },
    code: { type: String },
    mediaType: { type: String },
    length: { type: Number },
    rating: { type: Number },
});
// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
exports.Video = mongoose.model('Video', exports.VideoSchema);
