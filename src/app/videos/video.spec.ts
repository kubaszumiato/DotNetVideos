import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';


// Load the implementations that should be tested
import {VideoDetailsComponent} from './components/video-details.component';
import {VideoService} from './services/video.service';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),

    VideoDetailsComponent,
    VideoService
  ]);

  it('should have default data', inject([ VideoDetailsComponent ], (home) => {
    expect(home.data).toEqual({ value: '' });
  }));

  it('should have a title', inject([ VideoDetailsComponent ], (home) => {
    expect(!!home.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([ VideoDetailsComponent ], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
