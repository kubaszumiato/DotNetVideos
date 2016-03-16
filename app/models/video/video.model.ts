///<reference path="../../../typings/main.d.ts"/>

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

import mongoose = require('mongoose');
import { Tag } from './video.tag';
import { VideoType } from './video.enums';
import User from '../user/user.model';

// Create a `schema` for the `video` object

export interface IVideo extends mongoose.Document {
  //each video has some title which is displayed first ot the user
  title: { type : String },
  //each video must have an Url, whatever the place of publication
  url: { type : String},  
  //code defines the unique identifier of a movie within a given website, usually it's a part of URL
  code: { type : String},
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  mediaType: { type : String},  
  //length in seconds
  length: { type : Number},  
  //videoType declares the website the movie is coming from, eg. YouTube
  videoType: { type : VideoType}
  //tags for movies, assigned by movie creator/importer
  tags: { type : Tag | Array<Tag>},    
  //internal rating by dotnet-videos users
  rating: { type : Number},  
  //who uploaded the movie
  owner: {type: User}
};

export const VideoSchema = new mongoose.Schema({
  title: { type : String },
  url: { type : String},  
  code: { type : String},
  mediaType: { type : String},  
  length: { type : Number},  
  rating: { type : Number},  
 
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export const Video = mongoose.model<IVideo>('Video', VideoSchema);