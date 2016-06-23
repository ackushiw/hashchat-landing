import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { NgClass } from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header" style="background-color:#000;" [ngClass]="{'opened': menuOpen}">
      <button md-icon-button  (click)="toggleMenu()" class="hide-lg mobile-toggle-menu"><img src="./images/plus.svg" alt="menu"></button>
      <img (click)="onNavHome()" class="header-logo hide-lg" src="hashchatlogo.svg" alt="hashchat logo">
      <div class="mdl-layout__header-row hide-xs">
        <a [routerLink]="['/']" class="logo-link"><img class="header-logo" src="hashchatlogo.svg" alt="hashchat logo"></a>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only hide-xs">
          <a [routerLink]="['/about']" class="mdl-navigation__link text-white">About</a>
          <a href="http://hashchatapp.tumblr.com" class="mdl-navigation__link text-white">Blog</a>
          <a [routerLink]="['/privacy']" class="mdl-navigation__link text-white">Privacy</a>
          <a [routerLink]="['/terms']" class="mdl-navigation__link text-white">Terms</a>
        </nav>
        <nav class="mdl-navigation social-btns hide-xs">
          <a href="https://twitter.com/HashChatHQ" class="mdl-navigation__link twitter social-icon">
            <!-- twitter -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/HashChatApp/" class="mdl-navigation__link facebook social-icon">
            <!-- facebook -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"/>
            </svg>
          </a>
          <!-- <a class="mdl-navigation__link tumblr social-icon" href="http://hashchatapp.tumblr.com/">
            *tumblr *
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path  d="M16,11H13V14.9C13,15.63 13.14,16 14.1,16H16V19C16,19 14.97,19.1 13.9,19.1C11.25,19.1 10,17.5 10,15.7V11H8V8.2C10.41,8 10.62,6.16 10.8,5H13V8H16M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
            </svg>
          </a> -->
          <a href="https://www.instagram.com/hashchat/" class="mdl-navigation__link instagram social-icon">
            <!-- instagram -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
            </svg>
          </a>
          <a href="https://www.pinterest.com/hashchat/" class="mdl-navigation__link hide-xs pinterest social-icon">
            <!-- pinterest -->
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                d="M13.25,17.25C12.25,17.25 11.29,16.82 10.6,16.1L9.41,20.1L9.33,20.36L9.29,20.34C9.04,20.75 8.61,21 8.12,21C7.37,21 6.75,20.38 6.75,19.62C6.75,19.56 6.76,19.5 6.77,19.44L6.75,19.43L6.81,19.21L9.12,12.26C9.12,12.26 8.87,11.5 8.87,10.42C8.87,8.27 10.03,7.62 10.95,7.62C11.88,7.62 12.73,7.95 12.73,9.26C12.73,10.94 11.61,11.8 11.61,13C11.61,13.94 12.37,14.69 13.29,14.69C16.21,14.69 17.25,12.5 17.25,10.44C17.25,7.71 14.89,5.5 12,5.5C9.1,5.5 6.75,7.71 6.75,10.44C6.75,11.28 7,12.12 7.43,12.85C7.54,13.05 7.6,13.27 7.6,13.5A1.25,1.25 0 0,1 6.35,14.75C5.91,14.75 5.5,14.5 5.27,14.13C4.6,13 4.25,11.73 4.25,10.44C4.25,6.33 7.73,3 12,3C16.27,3 19.75,6.33 19.75,10.44C19.75,13.72 17.71,17.25 13.25,17.25Z"/>
            </svg>
          </a>
        </nav>
        <!-- <div class="dropdown hide-lg">
          <a href="#" class="dropbtn mdl-button mdl-button--icon"><i class="material-icons">more_vert</i></a>
          <div class="dropdown-content">
            <a href="#">About</a>
            <a href="http://hashchatapp.tumblr.com">Blog</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div> -->
      </div>
      <div class="mobile-menu">
        <div class="content-container">
          <a href="http://hashch.at/about.html">
            <h4>About</h4>
          </a>
          <a href="http://hashchatapp.tumblr.com">
            <h4>Blog</h4>
          </a>
          <a href="http://hashch.at/terms.html">
            <h4>Terms</h4>
          </a>
          <a href="http://hashch.at/privacy.html">
            <h4>Privacy</h4>
          </a>

          <br>
          <div class="mdl-grid social">
            <div class="mdl-cell mdl-cell--1-col"><a href="https://twitter.com/HashChatHQ" class="mdl-navigation__link twitter social-icon">
              <!-- twitter -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
              </svg>
            </a></div>
            <div class="mdl-cell mdl-cell--1-col"><a href="https://www.instagram.com/hashchat/" class="mdl-navigation__link instagram social-icon">
              <!-- instagram -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
            </a></div>
            <div class="mdl-cell mdl-cell--1-col"><a href="https://www.facebook.com/HashChatApp/" class="mdl-navigation__link facebook social-icon">
              <!-- facebook -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"/>
              </svg>
            </a></div>
            <div class="mdl-cell mdl-cell--1-col"><a href="https://www.pinterest.com/hashchat/" class="mdl-navigation__link pinterest social-icon">
              <!-- pinterest -->
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  d="M13.25,17.25C12.25,17.25 11.29,16.82 10.6,16.1L9.41,20.1L9.33,20.36L9.29,20.34C9.04,20.75 8.61,21 8.12,21C7.37,21 6.75,20.38 6.75,19.62C6.75,19.56 6.76,19.5 6.77,19.44L6.75,19.43L6.81,19.21L9.12,12.26C9.12,12.26 8.87,11.5 8.87,10.42C8.87,8.27 10.03,7.62 10.95,7.62C11.88,7.62 12.73,7.95 12.73,9.26C12.73,10.94 11.61,11.8 11.61,13C11.61,13.94 12.37,14.69 13.29,14.69C16.21,14.69 17.25,12.5 17.25,10.44C17.25,7.71 14.89,5.5 12,5.5C9.1,5.5 6.75,7.71 6.75,10.44C6.75,11.28 7,12.12 7.43,12.85C7.54,13.05 7.6,13.27 7.6,13.5A1.25,1.25 0 0,1 6.35,14.75C5.91,14.75 5.5,14.5 5.27,14.13C4.6,13 4.25,11.73 4.25,10.44C4.25,6.33 7.73,3 12,3C16.27,3 19.75,6.33 19.75,10.44C19.75,13.72 17.71,17.25 13.25,17.25Z"/>
              </svg>
            </a></div>
          </div>
          <br>
          <div class="centered-container">
            <a href="https://itunes.apple.com/app/hashchat-hashtag-group-chat/id1008197240" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect image-button app-store-button" title="Download on the Apple Store">
            </a>
          </div>

          <!-- end social grid -->
          <div class="mdl-grid footer">
            <!-- <div class="mdl-cell mdl-cell--2-col">
              <h5>Terms</h5>
            </div>
            <div class="mdl-cell mdl-cell--2-col">
              <h5>Privacy</h5>
            </div> -->
          </div>
          </div>
      </div>
    </header>
  <router-outlet></router-outlet>
  </div>
`,
  styleUrls: ['app.component.css'],
  directives: [
    APP_SHELL_DIRECTIVES,
    NgClass,
    MD_BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES
   ]
})

export class AppComponent {
  title = 'app works!';
  menuOpen : boolean;

  constructor(){
    this.menuOpen = false;
  }
  toggleMenu = function() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
  onNavHome() {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
