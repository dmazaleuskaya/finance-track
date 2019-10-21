import * as React from 'react';
import { useState } from 'react';
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

const navigation = props => {
    const [ navigationExpanded, setNavigationExpanded ] = useState(false);
    const [ title, setTitle ] = useState('Navigation');

<<<<<<< HEAD
    public const toggleNavigationHandler = () => {
        setNavigationExpanded(!navigationExpanded);
    };
=======
    toggleNavigationHandler = () => {
        this.setState({ navigationExpanded: !this.state.navigationExpanded });
    }
>>>>>>> T-12_Navigation_module_scss_files_to_module.css

        return (
<<<<<<< HEAD
            <div className={`styles.navigation ${navigationExpanded ? `styles.navigation_expanded` : ``}`}>
                <button className='styles.navigation__toggle' type='button' onClick={toggleNavigationHandler}>
                    <span className='styles.navigation__toggle-logo'>FT</span>
                    <span className={`styles.navigation__toggle-text ${navigationExpanded ? `styles.navigation__toggle-text_visible` : ``}`}>Finance Track</span>
=======
            <div className={ this.state.navigationExpanded ? styles.navigation_expanded : styles.navigation }>
                <button className={styles.navigation__toggle} type='button' onClick={this.toggleNavigationHandler}>
                    <span className={styles.navigation__toggle-logo}>FT</span>
                    <span className={ this.state.navigationExpanded ? styles.navigation__toggle-text_visible : styles.navigation__toggle-text }>Finance Track</span>
>>>>>>> T-12_Navigation_module_scss_files_to_module.css
                </button>
                <CSSTransition
                    in={navigationExpanded}
                    timeout={300}
                    classNames='navigation__routes'
                >
                    {state => (
<<<<<<< HEAD
                        <div className='navigation__routes'>
                            {props.routes.map((route, index) => {
=======
                        <div className={styles.navigation__routes}>
                            {this.props.routes.map((route, index) => {
>>>>>>> T-12_Navigation_module_scss_files_to_module.css
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