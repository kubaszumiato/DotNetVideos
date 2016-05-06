///<reference path="../../../typings/main.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ```
// video.comment.model.js
// (c) 2016 Jakub Szumiato
// jakub@szumiato.pl
// video.comment.model.(j)ts may be freely distributed under the MIT license
// ```
// ## Video Comment Model
// Note: MongoDB will autogenerate an _id for each Video comment object created
var mongoose = require('mongoose');
// Create the schema class for the video collection
var VideoCommentSchema = (function (_super) {
    __extends(VideoCommentSchema, _super);
    function VideoCommentSchema() {
        _super.apply(this, arguments);
    }
    return VideoCommentSchema;
}(mongoose.Schema));
var videoCommentSchema = new VideoCommentSchema();
// Duplicate the ID field.
videoCommentSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
videoCommentSchema.set('toJSON', {
    virtuals: true
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('VideoComment', videoCommentSchema);
