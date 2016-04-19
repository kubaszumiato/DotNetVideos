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
    private id: string;
    public DisplayMode: VideoDisplayMode;

    constructor(params: RouteParams,
        public videoService: VideoService) {
        this.id = params.get('id');
        if (this.id) {
            this.videoService.getVideo(this.id).subscribe((res) => {
                this.videoDetails = res;
            });
        }
        else {
                this.videoDetails = this.videoService.getEmptyVideo();      
        }
    }
    // @Input()
    public videoDetails: IVideo;
    
    public saveVideo(video: IVideo){
        this.videoService.createVideo(video).subscribe((res) => {
            this.videoDetails = res;
        })
    }
}