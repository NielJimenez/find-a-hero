import { lazy } from 'react'

const LoadHome = lazy(() => import('Containers/Home') /* webpackChunkName: "Container-Home" */)

export default [
  {
    path: '/',
    component: LoadHome
  },
  {
    path: '/events',
    component: LoadHome
  },
  {
    path: '/events/me',
    component: LoadHome
  }
]
