import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Movies />);
    expect(wrapper).toMatchSnapshot();
  });
});