import {Navigation} from 'react-native-navigation';
import {FAVORITES, POST, TOP_POSTS} from './shared/constants/componentName';
import PostPage from './shared/components/post/PostPage';
import TopPosts from './topposts/TopPosts';
import Favorites from './favorites/Favorites';

export const registerScreens = (Provider, store) => {
  Navigation.registerComponentWithRedux(FAVORITES,
    () => Favorites, Provider, store);
  Navigation.registerComponentWithRedux(TOP_POSTS,
    () => TopPosts, Provider, store);
  Navigation.registerComponentWithRedux(POST,
    () => PostPage, Provider, store);
};
