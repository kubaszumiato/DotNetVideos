import {Component, View, Injectable} from 'angular2/core';
import {IVideo, VideoDisplayMode} from '../../../shared/data-models/video.model.interfaces'
@Component(
    {
        selector: 'video-details',
        templateUrl: './video-details.component.html'        
    })
export class VideoDetails{
    public Video: IVideo;
    public DisplayMode: VideoDisplayMode;
}