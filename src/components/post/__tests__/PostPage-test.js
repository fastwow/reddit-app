import React from 'react';
import {PostPage} from '../PostPage';
import {shallow} from 'enzyme';

describe('PostPage', () => {
  it('Post link set correctly', () => {
    const props = {
      post: {url: 'http://test.com'},
      isFavorite: false,
      addToFavorite: jest.fn(),
      removeFromFavorite: jest.fn(),
      componentId: '12345',
    };
    const wrapper = shallow(<PostPage {...props}/>);
    expect(wrapper.find('WebView').props().source.uri).toEqual('http://test.com');
  });
});
