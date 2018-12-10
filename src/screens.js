import {Navigation} from 'react-native-navigation';
import {FAVORITES, POST, POSTS} from './constants/componentName';
import Favorites from './components/favorites/Favorites';
import PostPage from './components/post/PostPage';
import TopPosts from './containers/topposts/TopPosts';

export const registerScreens = (Provider, store) => {
  Navigation.registerComponentWithRedux(POSTS,
    () => TopPosts, Provider, store);
  Navigation.registerComponent(FAVORITES,
    () => Favorites, Provider, store);
  Navigation.registerComponentWithRedux(POST,
    () => PostPage, Provider, store);
};
