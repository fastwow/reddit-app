import {Navigation} from 'react-native-navigation';
import {FAVORITES, POST, POSTS} from './constants/componentName';
import Posts from './components/posts/Posts';
import Favorites from './components/favorites/Favorites';
import PostPage from './components/post/PostPage';

export const registerScreens = (Provider, store) => {
  Navigation.registerComponentWithRedux(POSTS,
    () => Posts, Provider, store);
  Navigation.registerComponent(FAVORITES,
    () => Favorites, Provider, store);
  Navigation.registerComponentWithRedux(POST,
    () => PostPage, Provider, store);
};
