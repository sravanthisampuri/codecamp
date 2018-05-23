import { PracDirPage } from './app.po';

describe('prac-dir App', function() {
  let page: PracDirPage;

  beforeEach(() => {
    page = new PracDirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
