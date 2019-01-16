import applyFilter from '../filterProcessor';
import {posts} from '../../shared/config/mockData';

describe('filterProccessor', () => {
  it('Filter applied correctly', () => {
    expect(applyFilter(posts, {searchTerm: 'house'})).toMatchSnapshot();
  });
});
