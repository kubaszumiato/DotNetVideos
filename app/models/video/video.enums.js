"use strict";
var VideoType;
(function (VideoType) {
    VideoType[VideoType["YouTube"] = 1] = "YouTube";
    VideoType[VideoType["Vimeo"] = 2] = "Vimeo";
    VideoType[VideoType["Channel9"] = 3] = "Channel9";
})(VideoType || (VideoType = {}));
exports.VideoType = VideoType;
//let type = VideoType.YouTube
//let videoTypeString = VideoType[type]; // displays YouTube 
