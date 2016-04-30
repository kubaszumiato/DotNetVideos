import {Component, View, Injectable, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {VideoService} from './video.service';
import {IVideo, VideoDisplayMode} from '../../../shared/data-models/video.model.interfaces';

@Component(
    {
        selector: 'video-details',
        providers: [...HTTP_PROVIDERS, VideoService]
    })
@View({
    template: require('./video-details.component.html')
})
export class VideoDetailsComponent {
    public DisplayMode: VideoDisplayMode = VideoDisplayMode.Read;

    constructor(private _params: RouteParams,
        public videoService: VideoService) {
        let id = _params.get('id');
        if (id) {
            this.videoService.getVideo(id).subscribe((res) => {
                this.videoDetails = res;
            });
        }
        else {
            this.videoDetails = this.videoService.getEmptyVideo();
        }

        // let mode = _params.get('mode');
        // this.DisplayMode = mode ? VideoDisplayMode.Edit : VideoDisplayMode.Read;
    }
    // @Input()
    public videoDetails: IVideo;

    public saveVideo(video: IVideo) {
        this.videoService.createVideo(video).subscribe((res) => {
            this.videoDetails = res;
        })
    }

    editMode(): void {
        this.DisplayMode = VideoDisplayMode.Edit;
    }
}