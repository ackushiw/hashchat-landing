export class LandingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('landing-app h1')).getText();
  }
}
