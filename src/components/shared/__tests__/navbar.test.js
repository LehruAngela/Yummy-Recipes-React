import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Navbar from '../navbar';

const mockStore = configureStore();

let store;
let wrapper;
const initialState = {
  auth: {
    username: 'TestUser'
  }
};

describe('Navbar Component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Navbar store={store} />)
  });

  it('renders without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
