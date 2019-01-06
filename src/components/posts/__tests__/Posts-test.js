import React from 'react';
import Posts from '../Posts';
import {shallow} from 'enzyme/build';
import ProgressBar from '../../common/ProgressBar';
import {posts} from '../../../config/mockData';
import Toast from 'react-native-simple-toast';

describe('Posts', () => {
  it('Loading state renders correctly', () => {
    const props = {
      isLoading: true,
      isRefreshing: false,
      posts: [],
      error: '',
      refreshPosts: jest.fn(),
      onClick: jest.fn(),
      fetchMore: jest.fn(),
      shouldApplyFilter: false,
      testID: '1234'
    };
    const wrapper = shallow(<Posts {...props}/>);
    expect(wrapper.contains(<ProgressBar/>)).toBe(true);
  });

  it('Posts loaded state renders correctly', () => {
    const props = {
      isLoading: false,
      isRefreshing: false,
      posts,
      error: '',
      refreshPosts: jest.fn(),
      onClick: jest.fn(),
      fetchMore: jest.fn(),
      shouldApplyFilter: false,
      testID: '1234'
    };
    const wrapper = shallow(<Posts {...props}/>);
    expect(wrapper.find('FlatList').props().data).toEqual(posts);
  });

  it('Error state renders correctly', () => {
    const error = 'Ops! We have some internal error :)';
    const props = {
      isLoading: false,
      isRefreshing: false,
      posts: [],
      error,
      refreshPosts: jest.fn(),
      onClick: jest.fn(),
      fetchMore: jest.fn(),
      shouldApplyFilter: false,
      testID: '1234'
    };
    shallow(<Posts {...props}/>);
    expect(Toast.show).toHaveBeenCalledWith(error);
  });
});
