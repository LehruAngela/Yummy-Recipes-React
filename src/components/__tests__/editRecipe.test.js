import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import EditRecipe from '../editRecipe';

describe('EditRecipe', () => {
    const params = {
        match: {
          params: {
            id: 1,
          },
        },
      };
    const wrapper = shallow(<EditRecipe match={{ params }}/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    it('handles EditRecipe', () => {
        expect(wrapper.instance().handleEditRecipe({ preventDefault }));
        });

})