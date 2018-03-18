import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PrivateRoute from '../privateRoutes';

describe('PrivateRoute', () => {
    const wrapper = shallow(<PrivateRoute/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    

})