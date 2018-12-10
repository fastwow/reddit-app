import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import SearchReducer from './FilterReducer';
import FavoritesReducer from './FavoritesReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  filter: SearchReducer,
  favorites: FavoritesReducer,
});

export default rootReducer;
