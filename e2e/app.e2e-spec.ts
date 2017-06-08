import { FreshLeavePage } from './app.po';

describe('fresh-leave App', () => {
  let page: FreshLeavePage;

  beforeEach(() => {
    page = new FreshLeavePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
