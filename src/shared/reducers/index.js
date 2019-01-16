import {combineReducers} from 'redux';
import PostsReducer from '../../topposts/topPostsReducer';
import SearchReducer from '../../filter/filterReducer';
import FavoritesReducer from '../../favorites/favoritesReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  filter: SearchReducer,
  favorites: FavoritesReducer,
});

export default rootReducer;
