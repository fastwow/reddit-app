import {fetchTopPosts} from '../api/reddit';
import {
  FETCH_MORE_POSTS_ERROR,
  FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_ERROR,
  FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS,
} from './types';

export const fetchPosts = () => dispatch => fetchPostsFromReddit(dispatch,
  createTypes(FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR));

export const fetchMorePosts = after => dispatch => fetchPostsFromReddit(dispatch,
  createTypes(FETCH_MORE_POSTS_STARTED, FETCH_MORE_POSTS_SUCCESS, FETCH_MORE_POSTS_ERROR), after);

export const fetchRefreshedPosts = () => dispatch => fetchPostsFromReddit(dispatch,
  createTypes(FETCH_REFRESHED_POSTS_STARTED, FETCH_REFRESHED_POSTS_SUCCESS, FETCH_REFRESHED_POSTS_ERROR));

const fetchPostsFromReddit = (dispatch, types, after = '') => {
  dispatch({type: types.started});
  return fetchTopPosts(after)
    .then(res => {
      dispatch({
        type: types.success,
        data: res,
      });
    })
    .catch(error => {
      dispatch({
        type: types.error,
        errorMessage: getErrorMessage(error),
      });
    });
};

const createTypes = (started, success, error) => {
  return {
    started,
    success,
    error,
  };
};

const getErrorMessage = error => {
  if (!error.response) {
    return 'Please check your internet connection :/';
  }

  return 'Ops! We have some internal error :)';
};
