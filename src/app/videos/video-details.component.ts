import {Component, View, Injectable, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {VideoService} from './video.service';
import {IVideo, VideoDisplayMode} from '../../../shared/data-models/video.model.interfaces';

@Component(
    {
        selector: 'video-details'     ,
        providers: [...HTTP_PROVIDERS, VideoService]   
    })
    @View({
      template: require('./video-details.component.html')  
    })
export class VideoDetailsComponent{
    private id: String;
    public DisplayMode: VideoDisplayMode;
    
    constructor(params: RouteParams,
    public videoService : VideoService) {
        this.id = params.get('id');
        this.videoService.getVideo(this.id).subscribe((res) => {

                // Populate our `todo` array with the `response` data
                this.videoDetails = res;
            });
        
        
    }
    
   // @Input()
    public videoDetails: IVideo;
}