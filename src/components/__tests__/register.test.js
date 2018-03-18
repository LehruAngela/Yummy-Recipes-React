import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Register from '../register';

describe('Register', () => {
    const wrapper = shallow(<Register />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      }); 

    it('handles Register', () => {
        expect(wrapper.instance().handleRegister({ preventDefault }));
    });

 
});