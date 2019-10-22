import * as React from 'react'
import { TransitionStatus } from 'react-transition-group/Transition'
import { NavLink } from 'react-router-dom'
import icons from '../../../shared/icons'
import styles from './NavigationItem.module.css'

export interface IRoute {
  title: string
  path: string
  component: React.ReactNode
}

export interface INavigationItemProps extends IRoute {
  navigationExpanded: boolean
  expandedState: TransitionStatus
}

export const NavigationItem: React.FC<INavigationItemProps> = (props) => {
  const { path, title, expandedState } = props

  const route: JSX.Element = (
    <NavLink
      to={path}
      exact={true}
      className={`styles.navigationItem styles.navigationItem_${expandedState}`}
      activeClassName={styles.navigationItem_active}
    >
      <p dangerouslySetInnerHTML={{ __html: (icons as any)[title] }} />
      <span className={`styles.navigationItem__title.${expandedState}`}>{title}</span>
    </NavLink>
  )

  return {route}
}

