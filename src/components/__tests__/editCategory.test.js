import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import EditCategory from '../editCategory';

describe('EditCategory', () => {
    const params = {
        match: {
          params: {
            id: 1,
          },
        },
      };
    const wrapper = shallow(<EditCategory match={{ params }}/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    it('handles EditCategory', () => {
        expect(wrapper.instance().handleEditCategory({ preventDefault }));
        });


})