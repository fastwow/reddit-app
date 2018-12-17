import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import SearchReducer from './filterReducer';
import FavoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  filter: SearchReducer,
  favorites: FavoritesReducer,
});

export default rootReducer;
