import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ViewCategory from '../viewCategories';

const mockStore = configureStore();

let store;
let wrapper;
const initialState = {
  category: {
    categories: [],
    total: 0,
    newCategory: {},
    deletedCategory: {}
  }
};

describe('Navbar Component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<ViewCategory store={store} />)
  });

  it('renders without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
