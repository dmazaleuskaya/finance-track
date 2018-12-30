import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import NavigationItem, { IRoute } from './navigationItem/NavigationItem';

interface INavigationProps {
    readonly test?: string
}

interface INavigationState {
    navigationExpanded: boolean,
    title: string,
    routes: IRoute[]
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
    constructor(props: INavigationProps) {
        super(props);

        this.state = {
            navigationExpanded: false,
            routes: [
                { title: 'finance', path: '/finance' },
                { title: 'home', path: '/' }
            ],
            title: 'Navigation'
        }
    }

    public toggleNavigationHandler = () => {
        this.setState(state => {
            return { navigationExpanded: !state.navigationExpanded };
        })
    }

    public render(): React.ReactNode {
        return (
            <div className={`navigation ${this.state.navigationExpanded ? `navigation_expanded` : ``}`}>
                <button className='navigation__toggle' type='button' onClick={this.toggleNavigationHandler}>
                    <span className='navigation__toggle-logo'>FT</span>
                    <span className={`navigation__toggle-text ${this.state.navigationExpanded ? `navigation__toggle-text_visible` : ``}`}>Finance Track</span>
                </button>
                <CSSTransition
                    in={this.state.navigationExpanded}
                    timeout={300}
                    classNames='navigation__routes'
                >
                    {state => (
                        <div className='navigation__routes'>
                            {this.state.routes.map((route, index) => {
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

export default Navigation;