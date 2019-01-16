import initialState from '../filterActionsInitialState';
import filterReducer from '../filterReducer';
import {FILTER_POSTS} from '../filterActionTypes';
import favoritesReducer from '../../favorites/favoritesReducer';

describe('filterReducer', () => {
  it('returns the same state for filter reducer on an unhandled action', () => {
    expect(filterReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
  });

  it(`handles ${FILTER_POSTS} action`, () => {
    expect(favoritesReducer(initialState, {searchTerm: 'cat', type: FILTER_POSTS})).toMatchSnapshot();
  });
});

