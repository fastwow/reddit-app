import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './src/screens';
import configureStore from './src/config/store';
import {createTabs} from './src/navigation';

registerScreens(Provider, configureStore());

Navigation.events().registerAppLaunchedListener(createTabs);
