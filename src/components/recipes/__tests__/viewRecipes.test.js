import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ViewRecipe from '../viewRecipes';

const mockStore = configureStore();

let store;
let wrapper;
const initialState = {
  recipe: {
    recipes: [],
    total: 0
  }
};

describe('Navbar Component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<ViewRecipe store={store} />)
  });

  it('renders without crashing', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
