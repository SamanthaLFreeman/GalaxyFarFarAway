import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router';import CardContainer from '../CardContainer/CardContainer' 

describe('App', () => {
  it('should match the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  });

  it('should update the favorites array in state when updateFavorites is called and isFavorite is set to true', () => {
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
    wrapper.instance().updateFavorites(mockCard);
    expect(wrapper.state('favorites')).toEqual([mockCard]);
  });

  it('should update the favorites array in state when updateFavorites is called and isFavorite is set to false', () => {
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
    wrapper.instance().updateFavorites(mockCard);
    wrapper.instance().updateFavorites(mockCard2);
    expect(wrapper.state('favorites')).toEqual([]);
  });
});
  

describe('Routes', () => {
  it('should route to People', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/people']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  });

  it('should route to Planets', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/planets']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  });

  it('should route to Vehicles', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/vehicles']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  });

  it('should route to Favorites', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  });
});