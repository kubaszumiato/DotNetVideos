import User from '../../app/models/user/user.model';

export interface IVideoComment {

  //id for the entity
  id?: string;
  //each video has some title which is displayed first ot the user
  title: string;
  //commment text
  comment: string; 
  //who uploaded the comment [optional]
  owner?: User;
};