import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import configureStore from './src/config/store';
import {createTabs} from './src/navigation';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';

const store = configureStore({});

const bootstrap = () => {
  persistStore(store, undefined, () => {
    registerScreens(Provider, store);
    createTabs();
  });
};

Navigation.events().registerAppLaunchedListener(() => {
  bootstrap();
});
