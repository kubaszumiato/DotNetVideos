import {Component, Injectable, Input, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Control, Validators} from 'angular2/common';
import {RouteParams} from 'angular2/router';

import {VideoService, VideoValidationService} from '../video.services';
import {IVideo, VideoDisplayMode, VideoOrigin} from '../../../../shared/data-models/video.model.interfaces';

@Component(
    {
        selector: 'video-details',
        providers: [VideoService, VideoValidationService],

        template: require('./video-details.component.html')
    })


export class VideoDetailsComponent {// implements OnInit {
    videoDetails: IVideo;
    videoForm: ControlGroup;
    formBuilder: FormBuilder;
    //public DisplayMode: VideoDisplayMode = VideoDisplayMode.Read;
    
  //  ngOnInit(): void {     }  
    constructor(
        private fb: FormBuilder,
        private _params: RouteParams,
        public videoService: VideoService,
        public validationService: VideoValidationService) {
            
        this.getVideo(); 
        this.videoForm = this.getVideoForm(fb);
    }

    getVideo() {
        let id = this._params.get('id');
        if (id) {
            this.videoService.getVideo(id).subscribe((res) => {
                this.videoDetails = res;
                console.log('got video: ' + res);
            });
        }
        else {
            this.videoDetails = this.videoService.getEmptyVideo();
        }
    }


    public saveVideo() {        
        this.videoService.createVideo(this.videoDetails).subscribe(
            (res) => { 
                this.videoDetails = res;
                console.log('successfully saved video with ID: ' + this.videoDetails.id) 
            },
            (error) => console.log('error on saving video'));
    }

    // editMode(): void {
    //     this.DisplayMode = VideoDisplayMode.Edit;
    // }

    submitForm(): void {
        console.log('submitted: ' + this.videoForm);
    }

    //where to put this?
    getVideoForm(fb: FormBuilder): ControlGroup {
        //that would be our form we need to build
        let result: ControlGroup = fb.group({
            //control for the movie title, required value
            'title': ['', Validators.required],
            //control for rating. Specific validator
            'rating': ['', VideoValidationService.ratingValidator],

            //url of the video, required value
            'url': ['', VideoValidationService.urlValidator]
        });
                
        result.controls['url'].valueChanges.subscribe(
            (value: string) => {
                console.log('url changed to: ' + value);
            });
        result.valueChanges.subscribe(
            (value: ControlGroup) => {
                console.log('form changed to: ' + value.value);
            });
        return result;
    }    
}