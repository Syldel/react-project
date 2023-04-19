import { useRoutes } from 'react-router-dom'
import { lazyLoadRoutes } from './LazyLoadRoutes'

export function RouterElement() {
  const routes = [
    {
      path: '/',
      name: 'Dashboard',
      element: lazyLoadRoutes('dashboard'),
    },
    {
      path: 'login',
      name: 'Login',
      element: lazyLoadRoutes('login'),
    },
    {
      path: 'register',
      name: 'Register',
      element: lazyLoadRoutes('register'),
    },
    {
      path: '*',
      name: 'Erreur 404',
      element: lazyLoadRoutes('error404'),
    },
  ]

  return useRoutes(routes)
}
