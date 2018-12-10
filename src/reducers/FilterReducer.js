import {
  FILTER_POSTS_SUCCESS,
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.filter, action) {
  switch (action.type) {
    case FILTER_POSTS_SUCCESS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
