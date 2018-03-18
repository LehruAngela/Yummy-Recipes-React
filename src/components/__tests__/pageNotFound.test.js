import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PageNotFound from '../pageNotFound';

describe('PageNotFound', () => {
    const wrapper = shallow(<PageNotFound/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        }); 
    

})