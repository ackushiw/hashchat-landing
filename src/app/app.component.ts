import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
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
