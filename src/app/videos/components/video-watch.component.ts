import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {EnumKeysPipe} from '../../shared/pipes/enum.keys.pipe';
import {VideoService, VideoValidationService} from '../video.services';
import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces';
import {VideoVimeoComponent} from './video-vimeo.component';
import {VideoYouTubeComponent} from './video-youtube.component';


@Component(
    {
        directives: [VideoVimeoComponent, VideoYouTubeComponent],
        selector: 'video-watch',
        pipes: [EnumKeysPipe],
        providers: [VideoService, VideoValidationService],
        template: require('./video-watch.component.html')
    })


export class VideoWatchComponent {
    videoDetails: IVideo;
    videoOrigins = VideoOriginEnum;
    displayMode: string;
    @Input()
    video: IVideo;

    constructor(){}      
}