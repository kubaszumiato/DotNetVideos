import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {VideoValidationService} from './video.validation.service';
//import {Observable} from 'rxjs/Observable';
import {IVideo, VideoOriginEnum} from '../../../../shared/data-models/video.model.interfaces'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class VideoVimeoService 
{
    private videoApiUrl : string = '/api/video';
    constructor(public http: Http) 
    {
    }
}

//var oEmbedUrl = 'http://vimeo.com/api/oembed.json';

//https://vimeo.com/110554082

// JSON

// https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871
// {
//     "type": "video",
//     "version": "1.0",
//     "provider_name": "Vimeo",
//     "provider_url": "https:\/\/vimeo.com\/",
//     "title": "The New Vimeo Player (You Know, For Videos)",
//     "author_name": "Vimeo Staff",
//     "author_url": "https:\/\/vimeo.com\/staff",
//     "is_plus": "0",
//     "html": "<iframe src=\"https:\/\/player.vimeo.com\/video\/76979871\" width=\"1280\" height=\"720\" frameborder=\"0\" title=\"The New Vimeo Player (You Know, For Videos)\" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>",
//     "width": 1280,
//     "height": 720,
//     "duration": 62,
//     "description": "It may look (mostly) the same on the surface, but under the hood we totally rebuilt our player. Here\u2019s a quick rundown of some of the coolest new features:\n\n\u2022 Lightning fast playback\n\u2022 Redesigned Share screen\n\u2022 Closed caption and subtitle compatible\n\u2022 HTML5 by default\n\u2022 Purchase-from-player functionality for embedded Vimeo On Demand trailers\n\u2022 More responsive than ever (go ahead, resize it, we dare you!!!)\n\nWe\u2019re really proud of these updates. So proud that we made a spiffy new page to showcase all the reasons why we have the best video player in the galaxy. Check it out here: http:\/\/vimeo.com\/player\n\nIn short, this is a player that even haters can love.",
//     "thumbnail_url": "https:\/\/i.vimeocdn.com\/video\/452001751_1280.webp",
//     "thumbnail_width": 1280,
//     "thumbnail_height": 720,
//     "thumbnail_url_with_play_button": "https:\/\/i.vimeocdn.com\/filter\/overlay?src=https:\/\/i.vimeocdn.com\/video\/452001751_1280.webp&src=http:\/\/f.vimeocdn.com\/p\/images\/crawler_play.png",
//     "upload_date": "2013-10-15 14:08:29",
//     "video_id": 76979871,
//     "uri": "\/videos\/76979871"
// }