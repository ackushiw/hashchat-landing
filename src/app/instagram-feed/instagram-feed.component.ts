import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  moduleId: module.id,
  selector: 'instagram-feed',
  templateUrl: 'instagram-feed.component.html',
  styleUrls: ['instagram-feed.component.css'],
  directives: [MD_GRID_LIST_DIRECTIVES]
})
export class InstagramFeedComponent implements OnInit {
  imagePosts: Observable<any[]>;
  constructor(af: AngularFire) {
    this.imagePosts = af.list('instagram/onView');
  }

  ngOnInit() {
  }

}
