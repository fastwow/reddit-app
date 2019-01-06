import {shallow} from 'enzyme/build';
import React from 'react';
import {Favorites} from '../Favorites';
import {posts} from '../../../config/mockData';

describe('Favorites', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Posts loaded state renders correctly', () => {
    const props = {
      posts,
    };
    const wrapper = shallow(<Favorites {...props}/>);
    expect(wrapper.find('Posts').props().posts).toEqual(posts);
  });

  it('Click on favorite item handled correctly', () => {
    const props = {
      posts,
    };
    const wrapper = shallow(<Favorites {...props}/>);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onClick');
    instance.forceUpdate();
    wrapper.find('Posts').simulate('click', posts[0]);
    expect(spy).toHaveBeenCalled();
  });
});
