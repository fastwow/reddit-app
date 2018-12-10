import {Navigation} from 'react-native-navigation';
import {FAVORITES, POST, TOP_POSTS} from './constants/componentName';
import PostPage from './components/post/PostPage';
import TopPosts from './containers/topposts/TopPosts';
import Favorites from './containers/favorites/Favorites';

export const registerScreens = (Provider, store) => {
  Navigation.registerComponentWithRedux(FAVORITES,
    () => Favorites, Provider, store);
  Navigation.registerComponentWithRedux(TOP_POSTS,
    () => TopPosts, Provider, store);
  Navigation.registerComponentWithRedux(POST,
    () => PostPage, Provider, store);
};
