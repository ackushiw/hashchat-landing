import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InstagramFeedComponent } from './instagram-feed.component';

describe('Component: InstagramFeed', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [InstagramFeedComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([InstagramFeedComponent],
      (component: InstagramFeedComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(InstagramFeedComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(InstagramFeedComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-instagram-feed></app-instagram-feed>
  `,
  directives: [InstagramFeedComponent]
})
class InstagramFeedComponentTestController {
}

