import * as React from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { NavLink } from 'react-router-dom'
import icons from '../../../shared/icons'

export interface IRoute {
  title: string
  path: string
  component: React.ReactNode
}

export interface INavigationItemProps extends IRoute {
  navigationExpanded: boolean
  expandedState: TransitionStatus
}

const navigationItem = (props: INavigationItemProps) => {
  const { path, title, expandedState } = props

  //TODO: remove type casting
  const route = (
    <NavLink
      to={path}
      exact={true}
      className={`navigationItem navigationItem_${expandedState}`}
      activeClassName='navigationItem_active'
    >
      <p dangerouslySetInnerHTML={{ __html: (icons as any)[title] }} />
      <span className={`navigationItem__title ${expandedState}`}>{title}</span>
    </NavLink>
  )

  return <React.Fragment>{route}</React.Fragment>
}

export default navigationItem
