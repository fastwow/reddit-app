import Adapter from 'enzyme-adapter-react-16.3';
import {configure} from 'enzyme';

configure({adapter: new Adapter()});

jest.mock('react-native-simple-toast', () => {
  return {
    show: jest.fn(),
  };
});

jest.mock('react-native-navigation', () => {
  return {
    Navigation: {
      events: jest.fn(() => {
        return {bindComponent: jest.fn()};
      }),
      mergeOptions: jest.fn(),
      push: jest.fn(),
    },
  };
});
