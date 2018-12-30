import * as React from 'react';

import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import NavigationItem from './navigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<Navigation >', () => {
    it('should render some <NavigationItem>', () => {
        const wrapper = mount(<Navigation />);
        // expect(wrapper.find(NavigationItem)).toHaveLength(wrapper.state().routes.length);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })
});