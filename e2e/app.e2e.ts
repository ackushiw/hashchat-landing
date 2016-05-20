import { LandingPage } from './app.po';

describe('landing App', function() {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('landing works!');
  });
});
