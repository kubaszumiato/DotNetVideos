import {Component, View, Injectable} from 'angular2/core';
import {VideoService} from './video.service';
import {IVideo} from '../../../shared/data-models/video.model.interfaces'
import {NgFor} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {VideoDetails} from './video-details.component';
@Component(
    {
        selector: 'video-list',
         providers: [...HTTP_PROVIDERS, VideoService, VideoDetails]
    })
    @View({
        template: require('./video-list.component.html'),
    })
export class VideoList {

//let's keep it dynamic for now
public videos: Array<IVideo>;

    //getting the service for our videos component
    constructor(public videoService: VideoService) {
        videoService.getVideos()
        .subscribe((res) => {
            this.videos = res;
        });
        
    }

createVideo() {

      this.videoService.createVideo({title: "exampleTitle"})
        .subscribe((res) => {

            // Populate our `todo` array with the `response` data
            this.videos = res;
        });
  }
    

}