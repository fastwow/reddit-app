import {filter} from '../filterActions';
import {FILTER_POSTS} from '../filterActionTypes';

describe('filterActions', () => {
  it(`creates ${FILTER_POSTS} action`, () => {
    expect(filter('cat')).toMatchSnapshot();
  });
});

