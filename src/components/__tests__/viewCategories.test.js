import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ViewCategories from '../viewCategories';

describe('ViewCategories', () => {
    const wrapper = shallow(<ViewCategories />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      }); 

    it('handles ViewCategories', () => {
        expect(wrapper.instance().handleViewCategory({ preventDefault }));
    });
    
    it('handles ViewCategories', () => {
        expect(wrapper.instance().handleDeleteCategory({ preventDefault }));
    });

    it('handles ViewCategories', () => {
        expect(wrapper.instance().handlePageChange({ preventDefault }));
    });
 
});