import {fetchTopPosts} from '../shared/api/redditApi';
import {buildAsyncActions} from '../shared/actions/asyncUtils';
import {FETCH_MORE_POSTS, FETCH_POSTS, FETCH_REFRESHED_POSTS} from './topPostsActionTypes';

export const fetchPosts = () => dispatch => fetchPostsFromReddit(dispatch, fetchPostsActions);

export const fetchMorePosts = after => dispatch => fetchPostsFromReddit(dispatch, fetchMorePostsActions, after);

export const fetchRefreshedPosts = () => dispatch => fetchPostsFromReddit(dispatch, fetchRefreshedPostsActions);

const fetchPostsFromReddit = (dispatch, actions, after = '') => {
  dispatch(actions.request());
  return fetchTopPosts(after)
    .then(res => dispatch(actions.success(res)))
    .catch(error => dispatch(actions.failure(getErrorMessage(error))));
};

export const fetchPostsActions = buildAsyncActions(FETCH_POSTS);
export const fetchMorePostsActions = buildAsyncActions(FETCH_MORE_POSTS);
export const fetchRefreshedPostsActions = buildAsyncActions(FETCH_REFRESHED_POSTS);

const getErrorMessage = error => {
  if (!error.response) {
    return 'Please check your internet connection :/';
  }

  return 'Ops! We have some internal error :)';
};
