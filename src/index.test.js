import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './components/App/App';

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('index', () => {

  it('renders without crashing', () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const div = document.createElement('div');
    ReactDOM.render(router, div);
    global.document.getElementById = (id) => id === 'root' && div
    expect(ReactDOM.render).toHaveBeenCalled()
  });

  it('should create a snapshot of the index.js file', () => {
    const router = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const wrapper = shallow(router);

    expect(wrapper).toMatchSnapshot();
  });
  
});
