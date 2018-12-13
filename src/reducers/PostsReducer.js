import {
  FETCH_MORE_POSTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_STARTED,
  FETCH_MORE_POSTS_STARTED,
  FILTER_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_SUCCESS,
  FETCH_REFRESHED_POSTS_STARTED, FETCH_POSTS_ERROR, FETCH_REFRESHED_POSTS_ERROR, FETCH_MORE_POSTS_ERROR,
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: false,
        errorMessage: '',
        after: '',
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: '',
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: action.errorMessage,
      };
    case FETCH_REFRESHED_POSTS_STARTED:
      return {
        ...state,
        isLoading: false,
        isRefreshing: true,
        errorMessage: '',
        after: '',
      };
    case FETCH_REFRESHED_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: '',
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_REFRESHED_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: action.errorMessage,
      };
    case FETCH_MORE_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isRefreshing: false,
        errorMessage: '',
      };
    case FETCH_MORE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        posts: state.posts.concat(action.data.children.map(c => c.data)),
        errorMessage: '',
        after: action.data.after,
      };
    case FETCH_MORE_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        errorMessage: action.errorMessage,
      };
    case FILTER_POSTS_SUCCESS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
