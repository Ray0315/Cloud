import { SnsPlusCloudPage } from './app.po';

describe('sns-plus-cloud App', function() {
  let page: SnsPlusCloudPage;

  beforeEach(() => {
    page = new SnsPlusCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
