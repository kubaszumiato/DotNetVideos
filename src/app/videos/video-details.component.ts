import {Component, View, Injectable} from 'angular2/core';
import {IVideo} from '../../../shared/data-models/video.model.interfaces'
@Component(
    {
        selector: 'video-details',
        templateUrl: './video-detials.component.html'        
    })
export class VideoDetails{
    public Video: IVideo[];
    
}