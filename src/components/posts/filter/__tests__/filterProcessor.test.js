import applyFilter from '../filterProcessor';
import {posts} from '../../../../config/mockData';

describe('filterProccessor', () => {
  it('Filter applied correctly', () => {
    expect(applyFilter(posts, {searchTerm: 'house'})).toMatchSnapshot();
  });
});
