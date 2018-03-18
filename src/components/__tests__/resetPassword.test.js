import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ResetPassword from '../resetPassword';

describe('ResetPassword', () => {
    const wrapper = shallow(<ResetPassword />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      }); 

    it('handles ResetPassword', () => {
        expect(wrapper.instance().handleResetPassword({ preventDefault }));
    });

 
});