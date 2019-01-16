import {Navigation} from 'react-native-navigation';
import {FAVORITES, POST, TOP_POSTS} from './shared/constants/componentName';

export const createTabs = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: TOP_POSTS,
                  options: {
                    topBar: {
                      visible: false,
                      height: 0,
                    },
                    bottomTab: {
                      fontSize: 12,
                      text: 'Top',
                      icon: require('../img/posts.png'),
                    },
                  },
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: FAVORITES,
                  options: {
                    topBar: {
                      title: {
                        text: 'Favorites',
                      },
                    },
                    bottomTab: {
                      text: 'Favorites',
                      fontSize: 12,
                      icon: require('../img/favorite_selected.png'),
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
});

export const viewPost = (componentId, post) => {
  Navigation.push(componentId, {
    component: {
      name: POST,
      passProps: {
        post,
      },
      options: {
        topBar: {
          title: {
            text: post.title,
          },
        },
      },
    },
  });
};
