import {FILTER_POSTS} from './filterActionTypes';

export function filter(searchTerm) {
  return {
    type: FILTER_POSTS,
    searchTerm,
  };
}
