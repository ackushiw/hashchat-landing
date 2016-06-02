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
import { HashchatBannerComponent } from './hashchat-banner.component';

describe('Component: HashchatBanner', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HashchatBannerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HashchatBannerComponent],
      (component: HashchatBannerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HashchatBannerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HashchatBannerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-hashchat-banner></app-hashchat-banner>
  `,
  directives: [HashchatBannerComponent]
})
class HashchatBannerComponentTestController {
}

