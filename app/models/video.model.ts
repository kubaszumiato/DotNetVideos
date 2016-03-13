///<reference path="../../typings/main.d.ts"/>

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
//import mongoose = require('mongoose');

import mongoose = require('mongoose');
//import Tag from '../entities/tag';
// Create a `schema` for the `video` object

export interface IVideo extends mongoose.Document {
  //each video has some title which is displayed first ot the user
  title: { type : String },
  //each video must have an Url, whatever the place of publication
  url: { type : String},  
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  mediaType: { type : String},  
  //length in seconds
  length: { type : Number},  
  //each movie may be tagged using a tag
  //to check this type declaration
  ///todo!
  //tags: { type : Tag | Array<Tag>},  
  //internal rating by dotnet-videos users
  rating: { type : Number},  
  //who uploaded the movie
  //owner: {type: User}
};

export const VideoSchema = new mongoose.Schema({
  title: { type : String },
  url: { type : String},  
  mediaType: { type : String},  
  length: { type : Number},  
  rating: { type : Number},  
 
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export const Video = mongoose.model<IVideo>('Video', VideoSchema);