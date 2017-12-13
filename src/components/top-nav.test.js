import React from 'react';
import {shallow} from 'enzyme';

import {NEW_GAME, TOGGLE_INFO_MODAL} from '../actions';

import {TopNav} from './top-nav';
import { exec } from 'child_process';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should dispatch newGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        const action = dispatch.mock.calls[0][0];                
        expect(action.type).toEqual(NEW_GAME)
    });
});
