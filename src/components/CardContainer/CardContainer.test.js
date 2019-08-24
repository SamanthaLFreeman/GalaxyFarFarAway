import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const data = [
      {
        name: 'Brandy',
        homeworld: 'Earth',
        poupaltion: 'a lot',
        species: 'Human',
        language: 'English',
        isFavorite: true
      }
    ]
    const wrapper = shallow(<CardContainer allData={data} toggleFavorite={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});