import initialState from './initialState';
import {ADD_TO_FAVORITE_SUCCESS, REMOVE_FROM_FAVORITE_SUCCESS} from '../actions/types';

export default function (state = initialState.favorites, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.data),
      };
    case REMOVE_FROM_FAVORITE_SUCCESS:
      return {
        ...state,
        posts: state.items.filter(item => action.data.id !== item.id)
      };
    default:
      return state;
  }
}
