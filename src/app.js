import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
import {Provider} from 'react-redux';
import {createTabs} from './navigation';
import configureStore from './config/store';

registerScreens(Provider, configureStore());

Navigation.events().registerAppLaunchedListener(createTabs);
