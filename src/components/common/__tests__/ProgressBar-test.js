import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../ProgressBar';

test('ProgressBar renders correctly', () => {
  const tree = renderer.create(
    <ProgressBar/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
