import {filter} from '../filterActions';
import {FILTER_POSTS} from '../types';

it(`creates ${FILTER_POSTS} action`, () => {
  expect(filter('cat')).toMatchSnapshot();
});
