import { IoTwitchPage } from './app.po';

describe('io-twitch App', () => {
  let page: IoTwitchPage;

  beforeEach(() => {
    page = new IoTwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
