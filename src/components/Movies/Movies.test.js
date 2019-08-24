import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const data = [
      {
        title: 'Movie',
        opening_crawl: 'blah blah blah',
        release_data: '3019'
      }
    ]
    const wrapper = shallow(<Movies film={data}/>);
    expect(wrapper).toMatchSnapshot();
  });
});