"use strict";
var VideoOriginEnum;
(function (VideoOriginEnum) {
    VideoOriginEnum[VideoOriginEnum["Unknown"] = 0] = "Unknown";
    VideoOriginEnum[VideoOriginEnum["YouTube"] = 1] = "YouTube";
    VideoOriginEnum[VideoOriginEnum["Vimeo"] = 2] = "Vimeo";
    VideoOriginEnum[VideoOriginEnum["Channel9"] = 3] = "Channel9";
})(VideoOriginEnum || (VideoOriginEnum = {}));
exports.VideoOriginEnum = VideoOriginEnum;
//let type = VideoType.YouTube
//let videoTypeString = VideoType[type]; // displays YouTube 
