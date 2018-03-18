import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Logout from '../logout';

describe('Logout', () => {
    const wrapper = shallow(<Logout/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    
    // it('handles Logout', () => {
    //     expect(wrapper.instance().handleLogout({ preventDefault }));
    //     });

})