import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {EnumKeysPipe} from '../../shared/pipes/enum.keys.pipe';
import {VideoService, VideoValidationService} from '../video.services';
import {IVideo, VideoDisplayMode, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces';

@Component(
    {
        selector: 'video-youtube',
        pipes: [EnumKeysPipe],
        providers: [VideoService, VideoValidationService],
        template: require('./video-youtube.component.html')
    })


export class VideoYouTubeComponent {// implements OnInit {
    videoDetails: IVideo;
    videoOrigins = VideoOriginEnum;
    displayMode: string;
    @Input()
    video: IVideo;

    //  ngOnInit(): void {     }  
    constructor(){}
      
}