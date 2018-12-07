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
  SEARCH_POST_SUCCESS,
} from './types';
import {fetchAll, add, remove} from '../storage/favoritesStorage';

export const fetchPosts = dispatch => fetchPostsFromReddit(dispatch, FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS);

export const fetchMorePosts = dispatch => fetchPostsFromReddit(dispatch, FETCH_MORE_POSTS_STARTED,
  FETCH_MORE_POSTS_SUCCESS);

export const fetchRefreshedPosts = dispatch => fetchPostsFromReddit(dispatch, FETCH_REFRESHED_POSTS_STARTED,
  FETCH_REFRESHED_POSTS_SUCCESS);

const fetchPostsFromReddit = (dispatch, requestType, successType) => {
  return dispatch => {
    dispatch({type: requestType});
    return fetchTopPosts()
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
};

export function search(searchTerm) {
  return {
    type: SEARCH_POST_SUCCESS,
    searchTerm,
  };
}

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
