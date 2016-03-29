import mongoose = require ('mongoose');
import {Tag} from '../../app/models/video/video.tag';
import {VideoType} from '../../app/models/video/video.enums';
import User from '../../app/models/user/user.model';

interface IVideo extends mongoose.Document {
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

export default IVideo;