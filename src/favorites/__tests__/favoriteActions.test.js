import {addToFavorite, removeFromFavorite} from '../favoriteActions';
import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../favoritesActionTypes';
import {posts} from '../../shared/config/mockData';

describe('favoriteActions', () => {
  it(`creates ${ADD_TO_FAVORITE} action`, () => {
    expect(addToFavorite(posts[0])).toMatchSnapshot();
  });

  it(`creates ${REMOVE_FROM_FAVORITE} action`, () => {
    expect(removeFromFavorite(posts[0])).toMatchSnapshot();
  });
});
