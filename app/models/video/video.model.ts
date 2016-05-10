///<reference path="../../../typings/main.d.ts"/>

// ```
// video.model.js
// (c) 2016 Jakub Szumiato
// jakub@szumiato.pl
// video.model.(j)ts may be freely distributed under the MIT license
// ```

// ## Video Model

// Note: MongoDB will autogenerate an _id for each Video object created


import mongoose = require('mongoose');
import { Tag } from './video.tag';
import { VideoOriginEnum } from './video.enums';
import {IVideo} from '../../../shared/data-models/video.model.interfaces';
import User from '../user/user.model';

// Create interface for mongoose document of the `video` collection
interface IVideoModel extends mongoose.Document, IVideo {}


let videoSchema = new mongoose.Schema({

  //each video has some title which is displayed first ot the user
  title: String,
  //each video must have an Url, whatever the place of publication
  url: String,
  //each video will have also it's url on dotnetvideos website
  localUrl: String,
  //code defines the unique identifier of a movie within a given website, usually it's a part of URL
  code: String,
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  mediaType: String,  
  //length in seconds
  videoLength: Number,  
  //videoType declares the website the movie is coming from, eg. YouTube
  videoOrigin: Number,
  //tags for movies, assigned by movie creator/importer
  tags: [],
  //internal rating by dotnet-videos users
  rating: Number,  
  //who uploaded the movie [optional]
  //owner: User,
  //we'd also like to know the watch count
  watchedCount:  Number,
}); 

// Duplicate the ID field.
videoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
videoSchema.set('toJSON', {
    virtuals: true
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model<IVideoModel>('Video', videoSchema);