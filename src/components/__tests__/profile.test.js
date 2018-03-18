import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Profile from '../profile';

describe('Profile', () => {
    const wrapper = shallow(<Profile/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 

    it('handles Profile', () => {
        expect(wrapper.instance().handleProfile({ preventDefault }));
    });


})