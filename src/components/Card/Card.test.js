import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});