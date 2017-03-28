import { SimpletasklistPage } from './app.po';

describe('simpletasklist App', () => {
  let page: SimpletasklistPage;

  beforeEach(() => {
    page = new SimpletasklistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
