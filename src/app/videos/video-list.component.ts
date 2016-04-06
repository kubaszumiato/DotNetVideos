//ng2
import {Component, Injectable} from 'angular2/core'; //View
import {NgFor} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router} from 'angular2/router';

import {VideoService} from './video.service';
import {IVideo} from '../../../shared/data-models/video.model.interfaces'
import {VideoDetailsComponent} from './video-details.component';
@Component(
    {
        selector: 'video-list',
        providers: [...HTTP_PROVIDERS, VideoService, VideoDetailsComponent],
        directives: [VideoDetailsComponent],
        template: require('./video-list.component.html')
    })
// @View({
//     template: require('./video-list.component.html'),
// })
export class VideoListComponent {

  
    public videos: Array<IVideo>;
    public selectedVideo: IVideo;

    //getting the service for our videos component
    constructor(
        private _router: Router,
        public videoService: VideoService) {
        videoService.getVideos()
            .subscribe((res) => {
                this.videos = res;
            });

    }

    createVideo() {

        this.videoService.createVideo({ title: "exampleTitle" })
            .subscribe((res) => {

                // Populate our `todo` array with the `response` data
                this.videos = res;
            });
    }

    onVideoSelected(selection: IVideo) {
        this.selectedVideo = selection;
        this._router.navigate( ['Video', { id: selection._id }] );
    }


}