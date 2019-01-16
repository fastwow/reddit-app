import initialState from '../favoritesActionsInitialState';
import favoritesReducer from '../favoritesReducer';
import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../favoritesActionTypes';
import {posts} from '../../shared/config/mockData';

describe('favoritesReducer', () => {
  it(`returns the same state for favorites reducer on an unhandled action`, () => {
    expect(favoritesReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
  });

  it(`handles ${ADD_TO_FAVORITE} action`, () => {
    expect(favoritesReducer({...initialState, posts: [posts[0]]}, {
      data: posts[1],
      type: ADD_TO_FAVORITE,
    })).toMatchSnapshot();
  });

  it(`handles ${REMOVE_FROM_FAVORITE} action`, () => {
    expect(favoritesReducer({...initialState, posts}, {
      data: posts[1],
      type: REMOVE_FROM_FAVORITE,
    })).toMatchSnapshot();
  });
});
