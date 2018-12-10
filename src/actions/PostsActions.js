import {fetchTopPosts} from '../api/reddit';
import {
  FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS,
  ADD_TO_FAVORITE_SUCCESS,
  REMOVE_FROM_FAVORITE_SUCCESS,
  FETCH_FAVORITES_POSTS_STARTED,
  FETCH_FAVORITES_POSTS_SUCCESS,
} from './types';
import {fetchAll, add, remove} from '../storage/favoritesStorage';

export const fetchPosts = after => dispatch => fetchPostsFromReddit(dispatch, after, FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS);

export const fetchMorePosts = after => dispatch => fetchPostsFromReddit(dispatch, after, FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS);

export const fetchRefreshedPosts = dispatch => fetchPostsFromReddit(dispatch, '', FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS);

const fetchPostsFromReddit = (dispatch, after = '', requestType, successType) => {
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

export const fetchFavorites = () => {
  return function (dispatch) {
    dispatch({type: FETCH_FAVORITES_POSTS_STARTED});
    return fetchAll()
      .then(res => {
        dispatch({
          type: FETCH_FAVORITES_POSTS_SUCCESS,
          data: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addToFavorite = item => {
  return function (dispatch) {
    return add(item)
      .then(() => {
        dispatch({
          type: ADD_TO_FAVORITE_SUCCESS,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const removeFromFavorite = item => {
  return function (dispatch) {
    return remove(item)
      .then(() => {
        dispatch({
          type: REMOVE_FROM_FAVORITE_SUCCESS,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
