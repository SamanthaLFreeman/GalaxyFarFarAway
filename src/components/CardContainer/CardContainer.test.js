import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});