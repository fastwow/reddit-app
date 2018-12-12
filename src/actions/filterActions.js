import {FILTER_POSTS_SUCCESS} from './types';

export function filter(searchTerm) {
  return {
    type: FILTER_POSTS_SUCCESS,
    searchTerm,
  };
}
