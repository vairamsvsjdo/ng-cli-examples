import { NgTestParsingPage } from './app.po';

describe('ng-test-parsing App', function() {
  let page: NgTestParsingPage;

  beforeEach(() => {
    page = new NgTestParsingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
