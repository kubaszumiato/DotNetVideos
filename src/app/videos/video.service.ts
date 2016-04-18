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

    getVideo(id) {
        return this.http.get('/api/video/' + id)
            .map<IVideo>(res => res.json());
    }

    getEmptyVideo() {
        var result: IVideo = {
        title : '',
        url: '',
        localUrl: '',
        code: '',
        mediaType: '',
        videoLength:  0,
        videoOrigin: VideoOrigin.YouTube,
        tags: [],
        rating:  0,
        watchedCount: 0}

        return result;
    }

    createVideo(data) {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/video', JSON.stringify(data),
            { headers: headers })
            .map<IVideo>(res => res.json());
    }
}