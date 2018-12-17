import {FILTER_POSTS} from './types';

export function filter(searchTerm) {
  return {
    type: FILTER_POSTS,
    searchTerm,
  };
}
