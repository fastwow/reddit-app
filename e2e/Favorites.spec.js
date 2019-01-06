import {componentTestId} from './helpers';

describe('Favorites', () => {
  beforeEach(async () => {
    await element(by.text('Favorites')).tap();
  });

  it('Posts should be appear on the screen', async () => {
    await expect(element(by.id(componentTestId.FAVORITE_POSTS))).toBeVisible();
  });

  it('Posts should be scrollable', async () => {
    await expect(element(by.text('No posts yet'))).toBeVisible();
  });
});
