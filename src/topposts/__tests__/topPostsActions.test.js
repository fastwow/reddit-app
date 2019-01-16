import mockStore from 'redux-mock-store';
import {
  fetchMorePosts,
  fetchMorePostsActions,
  fetchPosts,
  fetchPostsActions,
  fetchRefreshedPosts,
  fetchRefreshedPostsActions,
} from '../topPostsActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {FETCH_MORE_POSTS, FETCH_POSTS, FETCH_REFRESHED_POSTS} from '../topPostsActionTypes';
import {posts} from '../../shared/config/mockData';

const store = mockStore();
const mock = new MockAdapter(axios);

const successResponse = {data: posts};
const errorResponse = new Error('Look ma! I am an error.');

describe('postsActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it(`should handle ${FETCH_POSTS.success} action`, async () => {
    mock.onGet().reply(200, successResponse);
    await store.dispatch(fetchPosts(fetchPostsActions));
  });

  it(`should handle ${FETCH_POSTS.failure} action`, async () => {
    mock.onGet().reply(404, errorResponse);
    await store.dispatch(fetchPosts(fetchPostsActions));
  });

  it(`should handle ${FETCH_MORE_POSTS.success} action`, async () => {
    mock.onGet().reply(200, successResponse);
    await store.dispatch(fetchMorePosts(fetchMorePostsActions));
  });

  it(`should handle ${FETCH_MORE_POSTS.failure} action`, async () => {
    mock.onGet().reply(404, errorResponse);
    await store.dispatch(fetchMorePosts(fetchMorePostsActions));
  });

  it(`should handle ${FETCH_REFRESHED_POSTS.success} action`, async () => {
    mock.onGet().reply(200, successResponse);
    await store.dispatch(fetchRefreshedPosts(fetchRefreshedPostsActions));
  });

  it(`should handle ${FETCH_REFRESHED_POSTS.failure} action`, async () => {
    mock.onGet().reply(404, errorResponse);
    await store.dispatch(fetchRefreshedPosts(fetchRefreshedPostsActions));
  });

  afterEach(() => {
    expect(store.getActions()).toMatchSnapshot();
  });
});
