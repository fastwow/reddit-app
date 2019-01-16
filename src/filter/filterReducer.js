import {FILTER_POSTS} from './filterActionTypes';
import initialState from './filterActionsInitialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case FILTER_POSTS:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
