import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ViewRecipes from '../viewRecipes';

describe('ViewRecipes', () => {
    const params = {
        match: {
          params: {
            id: 1,
          },
        },
      };
    const wrapper = shallow(<ViewRecipes match={{ params }}/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    it('handles ViewRecipes', () => {
        expect(wrapper.instance().handleViewRecipe({ preventDefault }));
        });

    it('handles ViewRecipes', () => {
        expect(wrapper.instance().handleViewRecipe({ preventDefault }));
    });

    it('handles ViewRecipes', () => {
        expect(wrapper.instance().handleDeleteRecipe({ preventDefault }));
    });

    it('handles ViewRecipes', () => {
        expect(wrapper.instance().handleEditRecipe({ preventDefault }));
    });

    it('handles ViewRecipes', () => {
        expect(wrapper.instance().handlePageChange({ preventDefault }));
    });


})