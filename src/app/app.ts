// ```
// app.ts
// (c) 2016 Jakub Szumiato
// app.ts may be freely distributed under the MIT license
// ```

// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home/home';

// Import NgFor directive
import {NgFor} from 'angular2/common';

// Videos Component
import {VideoListComponent, VideoDetailsComponent} from './videos/videos.components';
import {UserLoginComponent, UserRegisterComponent} from './auth/authentication.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [NgFor],
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', name: 'Videos', component: VideoListComponent, useAsDefault: true },
  { path: '/home',  name: 'Videos',  component: VideoListComponent },
  { path: '/video/:mode/:id', name: 'Video', component: VideoDetailsComponent},
  { path: '/video/:mode', name: 'Add', component: VideoDetailsComponent},
  
  { path: '/login', name: 'Login', component: UserLoginComponent},
  { path: '/register', name: 'Register', component: UserRegisterComponent},
  // Async load a component using Webpack's require with
  // es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about/about')('About') },
])
export class App {
  brandNavbar = 'assets/icon/android-icon-48x48.png';
  brandFooter = 'assets/icon/android-icon-36x36.png';
  name = '.NET Videos';
  description = 'Free website aggregating .NET videos from the internet';
  url = 'https://twitter.com/jakubszumiato';

  constructor() {

  }  
  

/*
 * Please review the https://github.com/datatype_void/angular2-examples/ repo as it is updated for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @datatype_void on twitter
 * or our chat on Slack at https://VulgarDisplayOfPower.com/slack-join
 * or via chat on Gitter at https://gitter.im/datatype_void/angular2-webpack-starter
 */
