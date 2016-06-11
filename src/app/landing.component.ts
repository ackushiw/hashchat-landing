import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
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
    NgClass,
    HashchatBannerComponent,
    InstagramFeedComponent,
    MD_BUTTON_DIRECTIVES,
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
  menuOpen : boolean;

  constructor(){
    this.menuOpen = false;
  }
  toggleMenu = function() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
