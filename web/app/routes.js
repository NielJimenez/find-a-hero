import { lazy } from 'react'
import MainRootRoutes from 'RootContainers/MainRoot/routes'

const LoadMainRoot = lazy(() => import('RootContainers/MainRoot' /* webpackChunkName: "RootContainers-MainRoot" */))

const routes = [
  {
    path: '/',
    component: LoadMainRoot,
    routes: [
      ...MainRootRoutes
    ]
  }
]

export default routes
