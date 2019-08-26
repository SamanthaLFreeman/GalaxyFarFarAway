import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

describe('Movies', () => {
  it('should match the snapshot with all the data passed in correctly including no button has been clicked', () => {
    const data = [
      {
        title: 'Movie',
        opening_crawl: 'blah blah blah',
        release_data: '3019'
      }
    ]
    const wrapper = shallow(<Movies film={data} btnClicked={false}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all the data passed in correctly including a button has been clicked', () => {
    const data = [
      {
        title: 'Movie',
        opening_crawl: 'blah blah blah',
        release_data: '3019'
      }
    ]
    const wrapper = shallow(<Movies film={data} btnClicked={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});