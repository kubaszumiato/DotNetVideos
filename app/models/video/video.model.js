///<reference path="../../../typings/main.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ```
// video.model.js
// (c) 2016 Jakub Szumiato
// jakub@szumiato.pl
// video.model.(j)ts may be freely distributed under the MIT license
// ```
// ## Video Model
// Note: MongoDB will autogenerate an _id for each Video object created
var mongoose = require('mongoose');
// Create the schema class for the video collection
var VideoSchema = (function (_super) {
    __extends(VideoSchema, _super);
    function VideoSchema() {
        _super.apply(this, arguments);
    }
    return VideoSchema;
}(mongoose.Schema));
var videoSchema = new VideoSchema();
// Duplicate the ID field.
videoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
videoSchema.set('toJSON', {
    virtuals: true
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Video', videoSchema);
