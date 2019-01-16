import React from 'react';
import renderer from 'react-test-renderer';
import PostCart from '../PostCart';
import {posts} from '../../../../config/mockData';

describe('PostCart', () => {
  it('Renders correctly', () => {
    const testId = '1234';
    const tree = renderer.create(
      <PostCart
        viewItem={jest.fn()}
        item={posts[0]}
        testID={testId}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders with image placeholder', () => {
    const post = posts[0];
    post.thumbnail = 'default';
    const testId = '1234';
    const tree = renderer.create(
      <PostCart
        viewItem={() => {
        }}
        item={post}
        testID={testId}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
