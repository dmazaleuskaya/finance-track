import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { configure, mount, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Navigation } from './index';
import NavigationItem, { IRoute } from './navigationItem/NavigationItem';

configure({ adapter: new Adapter() });

const mockRoutes: IRoute[] = [
    {
        component: <div />,
        path: 'test',
        title: 'test'
    },
    {
        component: <div />,
        path: 'test2',
        title: 'test2'
    }
]

describe('<Navigation>', () => {
    it(`should render ${mockRoutes.length} <NavigationItem>`, () => {
        const wrapper = mount(
            <Router>
                <Navigation routes={mockRoutes} />
            </Router>
        );
        expect(wrapper.find(NavigationItem)).toHaveLength(mockRoutes.length);
    });

    it('should change display mode on buttom click', () => {
        const wrapper = shallow(<Navigation routes={mockRoutes} />);

        expect(wrapper.state('navigationExpanded')).toEqual(false);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('navigationExpanded')).toEqual(true);
    })
});
