import {IUser} from './user.model.interfaces';

export interface IVideoComment {

  //id for the entity
  id?: string;
  //each video has some title which is displayed first ot the user
  title: string;
  //commment text
  comment: string; 
  //who uploaded the comment [optional]
  owner?: IUser;
};