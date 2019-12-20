import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {NavigationItem, IRoute} from './navigationItem/NavigationItem';

import styles from './Navigation.module.css';

interface INavigationProps {
    routes: IRoute[];
}
interface INavigationState {
    navigationExpanded: boolean;
}

export class Navigation extends React.Component<
    INavigationProps,
    INavigationState
> {
    state: INavigationState = {
        navigationExpanded: false
    };

    toggleNavigationHandler = () => {
        const {navigationExpanded} = this.state;
        this.setState({navigationExpanded: !navigationExpanded});
    };

    render() {
        const {navigationExpanded} = this.state;
        const {routes} = this.props;
        return (
            <div
                className={
                    navigationExpanded
                        ? styles.navigation_expanded
                        : styles.navigation
                }>
                <button
                    className={styles.navigation__toggle}
                    type="button"
                    onClick={this.toggleNavigationHandler}>
                    <span className={styles.navigation__toggle_logo}>FT</span>
                    <span
                        className={
                            navigationExpanded
                                ? styles.navigation__toggle_text_visible
                                : styles.navigation__toggle_text
                        }>
                        Finance Track
                    </span>
                </button>
                <CSSTransition
                    in={navigationExpanded}
                    timeout={300}
                    classNames={styles.navigation__routes}>
                    {state => (
                        <div className={styles.navigation__routes}>
                            {routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <NavigationItem
                                            {...route}
                                            navigationExpanded={
                                                navigationExpanded
                                            }
                                            expandedState={state}
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    )}
                </CSSTransition>
            </div>
        );
    }
}
