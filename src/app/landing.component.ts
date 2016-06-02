import { Component } from '@angular/core';
import { AdminComponent } from './+admin';
import { Routes, Route, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HashchatBannerComponent } from './hashchat-banner/hashchat-banner.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';

@Component({
  moduleId: module.id,
  selector: 'landing-app',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],
  directives: [
    HashchatBannerComponent,
    InstagramFeedComponent,
    ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ]
})
@Routes([
  {
    path: '/admin',
    component: AdminComponent
  },
  {
    path: '/',
    component: InstagramFeedComponent
  }
])
export class LandingAppComponent {
  title = 'landing works!';
}
