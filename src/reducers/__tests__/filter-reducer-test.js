import initialState from '../initialState';
import filterReducer from '../filterReducer';
import {FILTER_POSTS} from '../../actions/types';
import favoritesReducer from '../favoritesReducer';

it('returns the same state for filter reducer on an unhandled action', () => {
  expect(filterReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it(`handles ${FILTER_POSTS} action`, () => {
  expect(favoritesReducer(initialState, {searchTerm: 'cat', type: FILTER_POSTS})).toMatchSnapshot();
});
