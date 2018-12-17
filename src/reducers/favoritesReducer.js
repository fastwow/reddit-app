import initialState from './initialState';
import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../actions/types';

export default function (state = initialState.favorites, action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        posts: state.posts.concat(action.data),
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        posts: state.posts.filter(item => action.data.id !== item.id),
      };
    default:
      return state;
  }
}
