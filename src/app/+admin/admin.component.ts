import { Component, OnInit, Inject } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_TABS_DIRECTIVES
  ]
})
export class AdminComponent implements OnInit {
  // auth;
  // subtitleObj: FirebaseObjectObservable<any>;
  // descriptionObj: FirebaseObjectObservable<any>;
  subVal: string;
  descVal: string;
  // constructor(private _auth: FirebaseAuth, af: AngularFire) {
  //   this.auth = _auth.getAuth();
  //   this.subtitleObj = af.object('/web-landing/subtitle');
  //   this.descriptionObj = af.object('/web-landing/description');
  // }

  ngOnInit() {
    // if (this.auth == null) {
    //   // this._auth.login({
    //   //   provider: AuthProviders.Google
    //   // });
    // } else {
    //   // this._auth
    // }
    // this.auth = this._auth.getAuth();
    // this.subtitleObj.subscribe(data => {
    //   this.subVal = data;
    // });
    // this.descriptionObj.subscribe(data => {
    //   this.descVal = data;
    // })
  }
  //
  // public googleLogin() {
  //   this._auth.login({
  //     provider: AuthProviders.Google
  //   })
  // }
  //
  // public passwordLogin() {
  //   this._auth.login({
  //     provider: AuthProviders.Password
  //   }).then(auth => {
  //     this.auth = auth;
  //   });
  // }
  //
  // public updateLanding(newSub, newDesc) {
  //   this.subtitleObj.set(newSub);
  //   this.descriptionObj.set(newDesc);
  // }

}
