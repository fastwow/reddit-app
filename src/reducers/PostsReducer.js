import {
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_STARTED,
  FETCH_MORE_POSTS_STARTED,
  SEARCH_POST_SUCCESS,
  FETCH_REFRESHED_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_STARTED,
  FETCH_FAVORITES_POSTS_STARTED,
  FETCH_FAVORITES_POSTS_SUCCESS,
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: false,
        after: '',
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_REFRESHED_POSTS_STARTED:
      return {
        ...state,
        isLoading: false,
        isRefreshing: true,
        after: '',
      };
    case FETCH_REFRESHED_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_MORE_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: false,
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        posts: state.posts.concat(action.data.children.map(c => c.data)),
        after: action.data.after,
      };
    case FETCH_FAVORITES_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: false,
      };
    case FETCH_FAVORITES_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        favorites: action.data,
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
