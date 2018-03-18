import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CreateCategory from '../createCategory';

describe('CreateCategory', () => {
    const wrapper = shallow(<CreateCategory/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    it('handles CreateCategory', () => {
        expect(wrapper.instance().handleCreateCategory({ preventDefault }));
        });


})