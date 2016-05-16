// ```
// _video.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// _video.js may be freely distributed under the MIT license
// ```
"use strict";
// */app/routes/_video.router.js*
// ## video API object
// HTTP Verb  Route                 Description
// GET        /api/video             Get all of the video items
// GET        /api/video/:video_id    Get a single video item by video item id
// POST       /api/video             Create a single video item
// DELETE     /api/video/:video_id    Delete a single video item
// PUT        /api/video/:video_id    Update a video item with new info
// Load the video model
var video_model_1 = require('../models/video/video.model');
var mongoose = require('mongoose');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (app, router) {
    // ### video API Routes
    // Define routes for the video item API
    router.route('/video')
        .post(function (req, res) {
        video_model_1.default.create({
            title: req.body.title,
            url: req.body.url,
            localUrl: req.body.localUrl,
            code: req.body.code,
            mediaType: req.body.mediaType,
            rating: req.body.rating,
            tags: req.body.tags,
            videoLength: req.body.videoLength,
            videoOrigin: req.body.videoOrigin,
            watchedCount: req.body.watchedCount
        }, function (err, video) {
            if (err)
                res.send('Error during video creation: ' + err);
            // DEBUG
            console.log("Video created: " + video);
            video_model_1.default.find(function (err, videos) {
                if (err)
                    res.send(err);
                res.json(videos);
            });
        });
    })
        .get(function (req, res) {
        // Use mongoose to get all video items in the database
        video_model_1.default.find(function (err, video) {
            if (err)
                res.send(err);
            else {
                res.json(video);
            }
        });
    });
    router.route('/video/:video_id')
        .get(function (req, res) {
        // Use mongoose to a single video item by id in the database
        video_model_1.default.findOne({ "_id": req.params.video_id }, function (err, video) {
            if (err)
                res.send(err);
            else
                res.json(video);
        });
    })
        .put(function (req, res) {
        // use our video model to find the video item we want
        video_model_1.default.findOne({
            '_id': req.params.video_id
        }, function (err, video) {
            if (err)
                res.send(err);
            // Only update a field if a new value has been passed in
            if (req.body.title)
                video.title = req.body.title;
            // save the video item
            return video.save(function (err) {
                if (err)
                    res.send(err);
                return res.send(video);
            });
        });
    })
        .delete(function (req, res) {
        // DEBUG
        console.log("Attempting to delete video with id: " + req.params.video_id);
        video_model_1.default.remove({
            _id: req.params.video_id
        }, function (err) {
            if (err)
                res.send(err);
            console.log('video successfully deleted!');
            // Video.find((err, videos) => {
            //   if (err)
            //     res.send(err);
            //   res.json(videos);
            // });
        });
    });
};
