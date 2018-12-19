import React from 'react';
import renderer from 'react-test-renderer';
import jest from 'jest-mock';
import Filter from '../Filter';

test('Filter renders correctly', () => {
  const tree = renderer.create(
    <Filter
      onChangeText={jest.fn()}
      filter={{searchTerm: 'cat'}}/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
