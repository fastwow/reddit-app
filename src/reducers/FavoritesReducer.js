import {
  FETCH_FAVORITES_POSTS_STARTED,
  FETCH_FAVORITES_POSTS_SUCCESS,
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.favorites, action) {
  switch (action.type) {
    case FETCH_FAVORITES_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FAVORITES_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.data,
      };
    default:
      return state;
  }
}
