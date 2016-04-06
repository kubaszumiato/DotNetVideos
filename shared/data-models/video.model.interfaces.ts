import mongoose = require ('mongoose');
import {Tag} from '../../app/models/video/video.tag';
import {VideoOrigin} from '../../app/models/video/video.enums';
import User from '../../app/models/user/user.model';

export interface IVideo extends mongoose.Document {
  //id for the already saved entity
//  id: { type : string},
  //each video has some title which is displayed first ot the user
  title: { type : String },
  //each video must have an Url, whatever the place of publication
  url: { type : String},  
  //each video will have also it's url on dotnetvideos website
  localUrl: {type : String},
  //code defines the unique identifier of a movie within a given website, usually it's a part of URL
  code: { type : String},
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  mediaType: { type : String},  
  //length in seconds
  videoLength: { type : Number},  
  //videoType declares the website the movie is coming from, eg. YouTube
  videoOrigin: { type : VideoOrigin}
  //tags for movies, assigned by movie creator/importer
  tags: { type : Tag | Array<Tag>},    
  //internal rating by dotnet-videos users
  rating: { type : Number},  
  //who uploaded the movie [optional]
  owner?: {type: User}
  //we'd also like to know the watch count
  watchedCount: {type: Number}
};

export enum VideoDisplayMode {
  Create,
  Read,
  CompactRead,
  Edit
}

