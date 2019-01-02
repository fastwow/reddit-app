import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(
      <ProgressBar/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
