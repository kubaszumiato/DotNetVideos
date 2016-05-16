///<reference path="../../../typings/main.d.ts"/>

// ```
// video.comment.model.js
// (c) 2016 Jakub Szumiato
// jakub@szumiato.pl
// video.comment.model.(j)ts may be freely distributed under the MIT license
// ```

// ## Video Comment Model

// Note: MongoDB will autogenerate an _id for each Video comment object created

import mongoose = require('mongoose');

import {IVideoComment} from '../../../shared/data-models/video.comment.model.interfaces';
import {IUser} from '../user/user.model';

// Create interface for mongoose document of the `video` collection
interface IVideoCommentModel extends mongoose.Document, IVideoComment {}

// Create the schema class for the video collection
class VideoCommentSchema extends mongoose.Schema implements IVideoComment {
  //id for the entity
  id: string;
  //video Id for which the comment has been made
  videoId: string;
  //each video has some title which is displayed first ot the user
  title: string;
  //comment text
  comment: string;
  //who uploaded the comment [optional]
  owner: IUser;
}
let videoCommentSchema = new VideoCommentSchema();

// Duplicate the ID field.
videoCommentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
videoCommentSchema.set('toJSON', {
    virtuals: true
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model<IVideoCommentModel>('VideoComment', videoCommentSchema);