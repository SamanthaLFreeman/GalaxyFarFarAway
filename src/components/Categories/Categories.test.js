import React from 'react';
import { shallow, mount } from 'enzyme';
import Categories from './Categories';
import App from '../App/App';
import { MemoryRouter } from 'react-router' 

describe('Categories', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Routes', () => {
  it('should route to People', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(App)).toHaveLength(1)
  })
})