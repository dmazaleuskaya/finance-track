import * as React from 'react';
import { TransitionStatus } from 'react-transition-group';
import icons from '../../../shared/icons';

export interface IRoute {
    title: string,
    path: string,
}

export interface INavigationItemProps extends IRoute {
    navigationExpanded: boolean,
    expandedState: TransitionStatus
}

const navigationItem = (props: INavigationItemProps) => {
    const route = (
        <button className='navigationItem navigationItem_expanded' type='button'>
            <p dangerouslySetInnerHTML={{ __html: icons[props.title] }} />
            <span className={`navigationItem__title ${props.expandedState}`}>{props.title}</span>
        </button>
    );

    return (
        <React.Fragment>
            {route}
        </React.Fragment>
    )
}

export default navigationItem;