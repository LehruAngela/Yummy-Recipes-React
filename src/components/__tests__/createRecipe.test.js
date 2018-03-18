import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CreateRecipe from '../createRecipe';

describe('CreateRecipe', () => {
    const params = {
        match: {
          params: {
            id: 1,
          },
        },
      };
    const wrapper = shallow(<CreateRecipe match={{ params }} />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    it('handles CreateRecipe', () => {
        expect(wrapper.instance().handleCreateRecipe({ preventDefault }));
        });


})