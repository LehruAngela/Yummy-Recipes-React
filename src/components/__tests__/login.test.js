import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Login from '../login';

describe('Login', () => {
    const wrapper = shallow(<Login />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 

    it('handles Login', () => {
        expect(wrapper.instance().handleLogin({ preventDefault }));
        });
})