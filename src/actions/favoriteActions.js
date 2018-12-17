import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from './types';

export function addToFavorite(item) {
  return {
    type: ADD_TO_FAVORITE,
    data: item,
  };
}

export function removeFromFavorite(item) {
  return {
    type: REMOVE_FROM_FAVORITE,
    data: item,
  };
}
