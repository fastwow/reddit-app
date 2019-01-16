import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../Filter';

describe('Filter', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(
      <Filter
        onChangeText={jest.fn()}
        filter={{searchTerm: 'cat'}}/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
