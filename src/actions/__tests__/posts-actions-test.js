import mockStore from 'redux-mock-store';
import {
  fetchPosts,
  fetchPostsActions,
  fetchMorePosts,
  fetchMorePostsActions,
  fetchRefreshedPosts,
  fetchRefreshedPostsActions,
} from '../postsActions';
import {FETCH_POSTS, FETCH_MORE_POSTS, FETCH_REFRESHED_POSTS} from '../types';
import {postsResponse as posts} from '../../config/jest/mockData';

const store = mockStore();
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);

const successResponse = {data: posts};
const errorResponse = new Error('Look ma! I am an error.');

beforeEach(() => {
  store.clearActions();
});

it('should handle ' + FETCH_POSTS.success + ' action', async () => {
  mock.onGet().reply(200, successResponse);
  await store.dispatch(fetchPosts(fetchPostsActions));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle ' + FETCH_POSTS.failure + ' action', async () => {
  mock.onGet().reply(404, errorResponse);
  await store.dispatch(fetchPosts(fetchPostsActions));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle ' + FETCH_MORE_POSTS.success + ' action', async () => {
  mock.onGet().reply(200, successResponse);
  await store.dispatch(fetchMorePosts(fetchMorePostsActions));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle ' + FETCH_MORE_POSTS.failure + ' action', async () => {
  mock.onGet().reply(404, errorResponse);
  await store.dispatch(fetchMorePosts(fetchMorePostsActions));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle ' + FETCH_REFRESHED_POSTS.success + ' action', async () => {
  mock.onGet().reply(200, successResponse);
  await store.dispatch(fetchRefreshedPosts(fetchRefreshedPostsActions));
  expect(store.getActions()).toMatchSnapshot();
});

it('should handle ' + FETCH_REFRESHED_POSTS.failure + ' action', async () => {
  mock.onGet().reply(404, errorResponse);
  await store.dispatch(fetchRefreshedPosts(fetchRefreshedPostsActions));
  expect(store.getActions()).toMatchSnapshot();
});