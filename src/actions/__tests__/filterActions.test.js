import {filter} from '../filterActions';
import {FILTER_POSTS} from '../types';

describe('filterActions', () => {
  it(`creates ${FILTER_POSTS} action`, () => {
    expect(filter('cat')).toMatchSnapshot();
  });
});

