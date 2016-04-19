import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {IVideo, VideoOrigin} from '../../../shared/data-models/video.model.interfaces'

@Injectable()
export class VideoService {
    constructor(public http: Http) {
    }

    getVideos() {
        return this.http.get('/api/video')
            .map<IVideo[]>(res => res.json());
    }

    getVideo(id: string) {
        return this.http.get('/api/video/' + id)
            .map<IVideo>(res => res.json());
    }

    getEmptyVideo() {
        var result: IVideo = {
            _id: '',
            title: '',
            url: '',
            localUrl: '',
            code: '',
            mediaType: '',
            videoLength: 0,
            videoOrigin: VideoOrigin.YouTube,
            tags: [],
            rating: 0,
            watchedCount: 0
        }

        return result;
    }

    createVideo(data) {
        if(!this.validateVideo(data))
        return;

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/video', JSON.stringify(data),
            { headers: headers })
            .map<IVideo>(res => res.json());
    }
    
    validateVideo(entity : IVideo) : boolean
    {
        let result: boolean = true;
        //non-empty fields validation
        if (!entity.title || !entity.url || !entity.videoLength)
        {
            result = false;
        }
        
        //rating must be an integer between 0 and 5
        if (entity.rating >=0 && entity.rating <=5)
        {
            result = false;
        }
        
        return result;
    }
}