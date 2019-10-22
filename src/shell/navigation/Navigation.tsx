import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import {NavigationItem, IRoute } from './navigationItem/NavigationItem';

import styles from './Navigation.module.css';

interface INavigationProps {
    routes: IRoute[]
}
interface INavigationState {
    navigationExpanded: boolean,
    title: string
}

export class Navigation extends React.Component<INavigationProps, INavigationState> {

    public state = {
        navigationExpanded: false,
        title: 'Navigation'
    }

    toggleNavigationHandler = () => {
        this.setState({ navigationExpanded: !this.state.navigationExpanded });
    }

    public render(): React.ReactNode {
        return (
            <div className={ this.state.navigationExpanded ? styles.navigation_expanded : styles.navigation }>
                <button className={styles.navigation__toggle} type='button' onClick={this.toggleNavigationHandler}>
                    <span className={styles.navigation__toggle_logo}>FT</span>
                    <span className={ this.state.navigationExpanded ? styles.navigation__toggle_text_visible : styles.navigation__toggle_text }>Finance Track</span>
                </button>
                <CSSTransition
                    in={this.state.navigationExpanded}
                    timeout={300}
                    classNames='navigation__routes'
                >
                    {state => (
                        <div className={styles.navigation__routes}>
                            {this.props.routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <NavigationItem {...route} navigationExpanded={this.state.navigationExpanded} expandedState={state} />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )}
                </CSSTransition>
            </div>
        )
    }
}