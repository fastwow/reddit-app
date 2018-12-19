import React from 'react';
import renderer from 'react-test-renderer';
import PostCart from '../PostCart';
import {posts} from '../../../../config/jest/mockData';
import jest from 'jest-mock';

test('PostCart renders correctly', () => {
  const tree = renderer.create(
    <PostCart
      viewItem={jest.fn()}
      item={posts[0]}/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('PostCart renders with image placeholder', () => {
  const post = posts[0];
  post.thumbnail = 'default';
  const tree = renderer.create(
    <PostCart
      viewItem={() => {}}
      item={post}/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
