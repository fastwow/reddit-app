export const componentTestId = {
  TOP_POSTS: 'top_posts',
  POST_WEB_VIEW: 'post_web_view',
  FAVORITE_POSTS: 'favorite_posts',
};

export const createListItemId = index => `listitem${index};`;

export const reloadApp = () => device.reloadReactNative();
