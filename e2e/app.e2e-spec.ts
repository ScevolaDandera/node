import { NodePage } from './app.po';

describe('node App', () => {
  let page: NodePage;

  beforeEach(() => {
    page = new NodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
