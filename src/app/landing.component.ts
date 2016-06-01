import { Component } from '@angular/core';
import { AdminComponent } from './+admin';
import { Routes, Route, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';

@Component({
  moduleId: module.id,
  selector: 'landing-app',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],
  directives: [
    InstagramFeedComponent,
    ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ]
})
@Routes([
  {
    path: '/admin',
    // name: 'Admin',
    component: AdminComponent
 }
])
export class LandingAppComponent {
  title = 'landing works!';
}
