import {componentTestId, createListItemId} from './helpers';

describe('Top posts', () => {
  it('Posts should be appear on the screen', async () => {
    await expect(element(by.id(componentTestId.TOP_POSTS))).toBeVisible();
  });

  it('Posts should be scrollable', async () => {
    await element(by.id(componentTestId.TOP_POSTS)).scroll(500, 'down');
    await element(by.id(componentTestId.TOP_POSTS)).scrollTo('top');
  });

  it('Click on first post', async () => {
    await element(by.id(createListItemId(0))).tap();
    await waitFor(element(by.id(componentTestId.POST_WEB_VIEW))).toBeVisible().withTimeout(5000);
  });
});
