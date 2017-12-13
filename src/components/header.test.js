import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

});
