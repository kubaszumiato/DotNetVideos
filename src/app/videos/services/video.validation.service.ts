import {Injectable} from 'angular2/core';
import {Control} from 'angular2/common';
import {IVideo, VideoOrigin} from '../../../../shared/data-models/video.model.interfaces'


@Injectable()
export class VideoValidationService {

    validateVideo(entity: IVideo): boolean {
        let result: boolean = true;

        if (!entity.id) {
            console.log('validation: id is empty for video: ' + entity);
            result = false;
        }
        if (!entity.title) {

            console.log('validation: title is empty for video: ' + entity);
            result = false;
        }
        if (VideoValidationService.recognizeVideoByUrl(entity.url) == VideoOrigin.Unknown) {
            console.log('validation: url of the video is incorrect: ' + entity.url);
            result = false;
        }

        //rating must be an integer between 0 and 5
        if (!entity || entity.rating < 0 || entity.rating > 5) {
            result = false;
            console.log('validation: wrong rating for video: ' + entity);
        }

        return result;
    }
    static ratingValidator(control: Control): { [s: string]: boolean } {
        let ratingValue: number = control.value;
        if (ratingValue < 0 || ratingValue > 5) {
            return { ratingOutOfBounds: true };
        }
    }

    static urlValidator(control: Control): { [s: string]: boolean } {
        let result: { [s: string]: boolean } = {};

        //only recognized Urls are allowed
        let url: string = control.value;
        console.log('in urlValidator');
        if (!url) {
            console.log('no url provided');
            result = { emptyUrl: true };
        }
        else {
            let service = this;            

            if (VideoValidationService.recognizeVideoByUrl(url) == VideoOrigin.Unknown) {
                console.log('unrecognized url format');
                result = { invalidUrl: true };
            }
        }
        return result;
    }


    static recognizeVideoByUrl(url: string): VideoOrigin {
        //http://stackoverflow.com/questions/5830387/how-to-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
        let ytUrlRegExp: RegExp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;

        //http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url
        let vmUrlRegExp: RegExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;

        //#todo
        let ch9UrlRegExp: RegExp = /http?/;

        if (url.match(ytUrlRegExp)) {
            console.log('youtube url matched');
            return VideoOrigin.YouTube;
        }
        if (url.match(vmUrlRegExp)) {
            console.log('vimeo url matched');            
            return VideoOrigin.Vimeo;
        }
        if (url.match(ch9UrlRegExp)) {
            console.log('channel9 url matched');            
            return VideoOrigin.Channel9;
        }
        return VideoOrigin.Unknown;
    }
}