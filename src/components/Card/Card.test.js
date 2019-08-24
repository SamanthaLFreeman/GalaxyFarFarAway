import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot of the person card with all the data passed in correctly', () => {
    const wrapper = shallow(<Card 
      name={'Someone'}
      language={'language'}
      population={'population'}
      homeworld={'homeworld'}
      species={'species'}
      toggleFavorite={'toggleFavorite'}
      isFavorite={true}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot of the planet card with all the data passed in correctly', () => {
    const wrapper = shallow(<Card
      name={'name'}
      terrain={'terrain'}
      population={'population'}
      climate={'climate'}
      residents={'residents'}
      toggleFavorite={'toggleFavorite'}
      isFavorite={false}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot of the vehicle card with all the data passed in correctly', () => {
    const wrapper = shallow(<Card
      name={'name'}
      model={'model'}
      vehicleClass={'vehicleClass'}
      numOfPassengers={'numOfPassengers'}
      toggleFavorite={'toggleFavorite'}
      isFavorite={false}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke toggleFavorite method when the favorite button is clicked', () => {
    const toggleFavorite = jest.fn();
    const wrapper = shallow(<Card name={'Chewy'} type={'People'} toggleFavorite={toggleFavorite}/>)
    wrapper.find('button').simulate('click');

    expect(toggleFavorite).toHaveBeenCalledWith('Chewy', 'People');
  })
});