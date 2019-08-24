import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  });

  it('should update the favorites array in state when addToFavorites is called and isFavorite is set to true', () => {
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
  });

  it('should update the favorites array in state when addToFavorites is called and isFavorite is set to false', () => {
    const mockCard = {
      name:'Princess Sam',
      language: 'Yiddish',
      population: 3000000,
      homeworld: 'Earth',
      species: 'Human',
      toggleFavorite: jest.fn(),
      isFavorite: true
    }
    const mockCard2 = {
      name:'Princess Sam',
      language: 'Yiddish',
      population: 3000000,
      homeworld: 'Earth',
      species: 'Human',
      toggleFavorite: jest.fn(),
      isFavorite: false
    }
    const wrapper = shallow(<App />)
    wrapper.setState({people: mockCard});
    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().addToFavorites(mockCard);
    wrapper.instance().addToFavorites(mockCard2);
    expect(wrapper.state('favorites')).toEqual([]);
  });
});
  
