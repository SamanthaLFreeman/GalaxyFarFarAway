import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke toggleFavorite method when the favorite button is clicked', () => {
    const toggleFavorite = jest.fn();
    const wrapper = shallow(<Card name={'Chewy'} type={'People'} toggleFavorite={toggleFavorite}/>)
    wrapper.find('button').simulate('click');

    expect(toggleFavorite).toHaveBeenCalledWith('Chewy', 'People');
  })
});