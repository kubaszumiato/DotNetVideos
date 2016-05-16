// ```
// routes.js
// (c) 2015 David Newman
// blackshuriken@hotmail.com
// routes.js may be freely distributed under the MIT license
// ```
"use strict";
// */app/routes.js*
// ## Node API Routes
// Define routes for the Node backend
// Load our API routes for user authentication
var authentication_router_1 = require('./routes/authentication.router');
// Load our API routes for the `todo` component
//import todoRoutes from './routes/_todo.router.js';
// Load our API routes for the `recipe` component
//import recipeRoutes from './routes/_recipe.router.js';
var video_router_1 = require('./routes/video.router');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (app, router, passport) {
    // ### Express Middlware to use for all requests
    router.use(function (req, res, next) {
        console.log('I sense a disturbance in the force...'); // DEBUG
        // Make sure we go to the next routes and don't stop here...
        next();
    });
    // Define a middleware function to be used for all secured routes
    var auth = function (req, res, next) {
        if (!req.isAuthenticated())
            res.send(401);
        else
            next();
    };
    // Define a middleware function to be used for all secured administration
    // routes
    var admin = function (req, res, next) {
        if (!req.isAuthenticated() || req.user.role !== 'admin')
            res.send(401);
        else
            next();
    };
    // ### Server Routes
    // Handle things like API calls,
    // #### Authentication routes
    // Pass in our Express app and Router.
    // Also pass in auth & admin middleware and Passport instance
    authentication_router_1.default(app, router, passport, auth, admin);
    // #### RESTful API Routes
    // Pass in our Express app and Router
    video_router_1.default(app, router);
    // All of our routes will be prefixed with /api
    app.use('/api', router);
    // ### Frontend Routes
    // Route to handle all Angular requests
    app.get('*', function (req, res) {
        // Load our src/app.html file
        res.sendfile('./dist/index.html');
    });
};
