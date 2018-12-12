import {ADD_TO_FAVORITE_SUCCESS, REMOVE_FROM_FAVORITE_SUCCESS} from './types';

export function addToFavorite(item) {
  return {
    type: ADD_TO_FAVORITE_SUCCESS,
    item,
  };
}

export function removeFromFavorite(item) {
  return {
    type: REMOVE_FROM_FAVORITE_SUCCESS,
    item,
  };
}
