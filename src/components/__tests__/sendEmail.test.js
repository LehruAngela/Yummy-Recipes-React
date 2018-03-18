import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SendEmail from '../sendEmail';

describe('SendEmail', () => {
    const wrapper = shallow(<SendEmail />);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      }); 

    it('handles SendEmail', () => {
        expect(wrapper.instance().handleSendEmail({ preventDefault }));
    });

 
});