import React from 'react';
import { shallow } from 'enzyme';
import FavR2D2 from './FavR2D2';

describe('FavR2D2', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<FavR2D2 />);
    expect(wrapper).toMatchSnapshot();
  });
});