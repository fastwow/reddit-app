import {fetchTopPosts} from '../api/reddit';
import {
  FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS,
} from './types';

export const fetchPosts = () => dispatch => fetchPostsFromReddit(dispatch, FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS);

export const fetchMorePosts = after => dispatch => fetchPostsFromReddit(dispatch, FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS, after);

export const fetchRefreshedPosts = () => dispatch => fetchPostsFromReddit(dispatch, FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS);

const fetchPostsFromReddit = (dispatch, requestType, successType, after = '') => {
  dispatch({type: requestType});
  return fetchTopPosts(after)
    .then(res => {
      dispatch({
        type: successType,
        data: res,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
