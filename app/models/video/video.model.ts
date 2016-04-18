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

// Grab the Mongoose module and some references

import mongoose = require('mongoose');
import { Tag } from './video.tag';
import { VideoOrigin } from './video.enums';
import {IVideo} from '../../../shared/data-models/video.model.interfaces';
//import User from '../user/user.model';

// Create a `schema` for the `video` object
interface IVideoModel extends mongoose.Document, IVideo {}
let VideoSchema = new mongoose.Schema({
  title: { type : String },
  url: { type : String},  
  localUrl: { type : String},
  code: { type : String},
  mediaType: { type : String},  
  videoLength: { type : Number},  
  videoOrigin: { type : String},
  tags: { type : Array},  
  rating: { type : Number},
  owner: { type : String },
  watchedCount: { type : Number}
 
});

// Expose the model so that it can be imported and used in
// the controller (to search, delete, etc.)
export default mongoose.model<IVideoModel>('Video', VideoSchema);



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