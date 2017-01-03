import { TestSafetyPage } from './app.po';

describe('test-safety App', function() {
  let page: TestSafetyPage;

  beforeEach(() => {
    page = new TestSafetyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
