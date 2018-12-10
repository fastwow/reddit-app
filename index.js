import {Navigation} from 'react-native-navigation';
import {registerScreens} from 'src/screens';
import {Provider} from 'react-redux';
import {createTabs} from 'src/navigation';
import configureStore from 'src/config/store';

registerScreens(Provider, configureStore());

Navigation.events().registerAppLaunchedListener(createTabs);
