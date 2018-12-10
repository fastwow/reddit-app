import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import SearchReducer from './FilterReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  filter: SearchReducer,
});

export default rootReducer;
