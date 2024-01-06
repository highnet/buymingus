import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router'
import Hero from './Hero.tsx';
import Tokenomics from './Tokenomics.tsx';
import Disclaimer from './Disclaimer.tsx';
import Incinerator from './Incinerator.tsx';


const rootRoute = new RootRoute({
  component: () => (
    <App />
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute, path: '/', component: () => (
    <>
      <Hero />
      <Tokenomics />
      <Disclaimer />
    </>
  ),
})

const incinerateRoute = new Route({
  getParentRoute: () => rootRoute, path: 'incinerate', component: () => (
    <Incinerator />
  ),
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  incinerateRoute
])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
