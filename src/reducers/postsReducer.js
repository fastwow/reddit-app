import initialState from './initialState';
import {FETCH_MORE_POSTS, FETCH_POSTS, FETCH_REFRESHED_POSTS} from '../actions/types';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS.request:
      return {
        ...state,
        isLoading: true,
        error: '',
        after: '',
      };
    case FETCH_POSTS.success:
      return {
        ...state,
        isLoading: false,
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_POSTS.failure:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case FETCH_REFRESHED_POSTS.request:
      return {
        ...state,
        isRefreshing: true,
        error: '',
        after: '',
      };
    case FETCH_REFRESHED_POSTS.success:
      return {
        ...state,
        isRefreshing: false,
        posts: action.data.children.map(c => c.data),
        after: action.data.after,
      };
    case FETCH_REFRESHED_POSTS.failure:
      return {
        ...state,
        isRefreshing: false,
        error: action.error,
      };
    case FETCH_MORE_POSTS.request:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case FETCH_MORE_POSTS.success:
      return {
        ...state,
        isLoading: false,
        posts: state.posts.concat(action.data.children.map(c => c.data)),
        after: action.data.after,
      };
    case FETCH_MORE_POSTS.failure:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
