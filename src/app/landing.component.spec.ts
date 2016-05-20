import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LandingAppComponent } from '../app/landing.component';

beforeEachProviders(() => [LandingAppComponent]);

describe('App: Landing', () => {
  it('should create the app',
      inject([LandingAppComponent], (app: LandingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'landing works!\'',
      inject([LandingAppComponent], (app: LandingAppComponent) => {
    expect(app.title).toEqual('landing works!');
  }));
});
