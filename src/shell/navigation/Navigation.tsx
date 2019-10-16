import * as React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import NavigationItem, { IRoute } from './navigationItem/NavigationItem';
import { string } from 'prop-types';

import styles from './Navigation.module.css';

interface INavigationProps {
    routes: IRoute[]
}

interface INavigationState {
    navigationExpanded: boolean,
    title: string
}

const navigation = props => {
    const [ navigationExpanded, setNavigationExpanded ] = useState(false);
    const [ title, setTitle ] = useState('Navigation');

    public const toggleNavigationHandler = () => {
        setNavigationExpanded(!navigationExpanded);
    };

        return (
            <div className={`styles.navigation ${navigationExpanded ? `styles.navigation_expanded` : ``}`}>
                <button className='styles.navigation__toggle' type='button' onClick={toggleNavigationHandler}>
                    <span className='styles.navigation__toggle-logo'>FT</span>
                    <span className={`styles.navigation__toggle-text ${navigationExpanded ? `styles.navigation__toggle-text_visible` : ``}`}>Finance Track</span>
                </button>
                <CSSTransition
                    in={navigationExpanded}
                    timeout={300}
                    classNames='navigation__routes'
                >
                    {state => (
                        <div className='navigation__routes'>
                            {props.routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <NavigationItem {...route} navigationExpanded={navigationExpanded} expandedState={state} />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )}
                </CSSTransition>
            </div>
        );
};

export default navigation;