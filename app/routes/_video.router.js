// ```
// _video.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// _video.js may be freely distributed under the MIT license
// ```

// */app/routes/_video.router.js*

// ## video API object

// HTTP Verb  Route                 Description

// GET        /api/video             Get all of the video items
// GET        /api/video/:video_id    Get a single video item by video item id
// POST       /api/video             Create a single video item
// DELETE     /api/video/:video_id    Delete a single video item
// PUT        /api/video/:video_id    Update a video item with new info

// Load the video model
import Video from '../models/video/video.model';
import mongoose from 'mongoose';
export default (app, router) => {

  // ### video API Routes

  // Define routes for the video item API

  router.route('/video')

    // ### Create a video item

    // Accessed at POST http://localhost:8080/api/video

    // Create a video item
    .post((req, res) => {
      
      Video.create({
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
      }, (err, video) => {

      if (err)
        res.send('Error during video creation: ' + err);

      // DEBUG
      console.log(`Video created: ${video}`);

      Video.find((err, videos) => {
        if (err)
          res.send(err);

        res.json(videos);
      });
    });
})

    // ### Get all of the video items

    // Accessed at GET http://localhost:8080/api/video
    .get((req, res) => {
  // Use mongoose to get all video items in the database
  Video.find((err, video) => {
    if (err)
      res.send(err);

    else {
      res.json(video);
    }
  });

});

router.route('/video/:video_id')

  // ### Get a video item by ID

  // Accessed at GET http://localhost:8080/api/video/:video_id
  .get((req, res) => {

    // Use mongoose to a single video item by id in the database
    Video.findOne({ "_id": req.params.video_id }, (err, video) => {


      if (err)
        res.send(err);

      else
        res.json(video);
    });
  })

  // ### Update a video item by ID

  // Accessed at PUT http://localhost:8080/api/video/:video_id
  .put((req, res) => {

    // use our video model to find the video item we want
    Video.findOne({

      '_id': req.params.video_id

    }, (err, video) => {

      if (err)
        res.send(err);

      // Only update a field if a new value has been passed in
      if (req.body.text)
        video.text = req.body.text;

      // save the video item
      return video.save((err) => {

        if (err)
          res.send(err);

        return res.send(video);

      });
    });
  })

  // ### Delete a video item by ID

  // Accessed at DELETE http://localhost:8080/api/video/:video_id
  .delete((req, res) => {

    // DEBUG
    console.log(`Attempting to delete video with id: ${req.params.video_id}`);

    video.remove({

      _id: req.params.video_id
    }, (err, video) => {

      if (err)
        res.send(err);

      console.log('video successfully deleted!');

      video.find((err, videos) => {
        if (err)
          res.send(err);

        res.json(videos);
      });
    });
  });
};