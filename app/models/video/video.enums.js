"use strict";
var VideoOrigin;
(function (VideoOrigin) {
    VideoOrigin[VideoOrigin["YouTube"] = 1] = "YouTube";
    VideoOrigin[VideoOrigin["Vimeo"] = 2] = "Vimeo";
    VideoOrigin[VideoOrigin["Channel9"] = 3] = "Channel9";
})(VideoOrigin || (VideoOrigin = {}));
exports.VideoOrigin = VideoOrigin;
//let type = VideoType.YouTube
//let videoTypeString = VideoType[type]; // displays YouTube 
