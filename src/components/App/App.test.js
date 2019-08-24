import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  });

  it('should update the favorites array in state when addToFavorites is called', () => {
    const mockCard = {
      name:'Princess Sam',
      language: 'Yiddish',
      population: 3000000,
      homeworld: 'Earth',
      species: 'Human',
      toggleFavorite: jest.fn(),
      isFavorite: true
    }
    const wrapper = shallow(<App />)
    wrapper.setState({people: mockCard});
    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().addToFavorites(mockCard);
    expect(wrapper.state('favorites')).toEqual([mockCard]);
    // wrapper.instance().addToFavorites(mockCard);
    // expect(wrapper.state('favorites')).toEqual([]);
  });

  it('should return a number between 0 and 7', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().getRandomNumber()
    expect(wrapper.instance().getRandomNumber).toBeWithinRange(0, 7);
  });

  
});
  
