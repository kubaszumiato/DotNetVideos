import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
//import {IVideo} from '../../../shared/data-models/video.model.interfaces'

@Injectable()
export class VideoService {
    constructor (public http:Http){        
    }    
    getVideos() {
        return this.http.get('/api/video')
            .map(res => res.json());
    }
    
    createVideo(data) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/video', JSON.stringify(data),
          {headers: headers})
        .map(res => res.json());
  }
}