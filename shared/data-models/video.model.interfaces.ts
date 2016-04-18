import mongoose = require ('mongoose');
import {Tag} from '../../app/models/video/video.tag';
import {VideoOrigin} from '../../app/models/video/video.enums';
import User from '../../app/models/user/user.model';

export interface IVideo {
  //id for the already saved entity
//  id: string,
  //each video has some title which is displayed first ot the user
  title: string,
  //each video must have an Url, whatever the place of publication
  url: string,  
  //each video will have also it's url on dotnetvideos website
  localUrl: string,
  //code defines the unique identifier of a movie within a given website, usually it's a part of URL
  code: string,
  //mediaType describes what kind of movie is that (what type of file preciesly speaking)
  mediaType: string,  
  //length in seconds
  videoLength: number,  
  //videoType declares the website the movie is coming from, eg. YouTube
  videoOrigin: VideoOrigin
  //tags for movies, assigned by movie creator/importer
  tags: Tag | Array<Tag>,    
  //internal rating by dotnet-videos users
  rating: number,  
  //who uploaded the movie [optional]
  owner?: User
  //we'd also like to know the watch count
  watchedCount:  number
};
export {VideoOrigin}
export enum VideoDisplayMode {
  Create,
  Read,
  CompactRead,
  Edit
}

