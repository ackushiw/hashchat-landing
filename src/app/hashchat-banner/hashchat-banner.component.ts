import { Component, OnInit } from '@angular/core';


import { InstagramFeedComponent } from '../instagram-feed/instagram-feed.component';

@Component({
  moduleId: module.id,
  selector: 'hashchat-banner',
  templateUrl: 'hashchat-banner.component.html',
  styleUrls: ['hashchat-banner.component.css'],
  directives: [InstagramFeedComponent]
})
export class HashchatBannerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
