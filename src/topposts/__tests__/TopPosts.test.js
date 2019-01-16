import {shallow} from 'enzyme/build';
import React from 'react';
import {TopPosts} from '../TopPosts';
import {posts} from '../../shared/config/mockData';

describe('TopPosts', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Posts loaded state renders correctly', () => {
    const props = {
      posts,
      actions: {fetchPosts: jest.fn()},
      filter: {searchTerm: ''},
    };
    const wrapper = shallow(<TopPosts {...props}/>);
    expect(wrapper.find('Posts').props().posts).toEqual(posts);
  });

  it('fetchPosts action have been called', () => {
    const actions = {fetchPosts: jest.fn()};
    const filter = {searchTerm: ''};
    const props = {
      posts,
      actions,
      filter,
    };
    shallow(<TopPosts {...props}/>);
    expect(actions.fetchPosts).toHaveBeenCalled();
  });

  it('filter action have been called', () => {
    const searchTerm = 'cat';
    const actions = {
      fetchPosts: jest.fn(),
      filter: jest.fn(),
    };
    const props = {
      posts,
      actions,
      filter: {searchTerm},
    };
    const wrapper = shallow(<TopPosts {...props}/>);
    const instance = wrapper.instance();
    instance.onChangeText(searchTerm);
    expect(actions.filter).toHaveBeenCalledWith(searchTerm);
  });
});
