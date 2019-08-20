import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';

describe('Categories', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});