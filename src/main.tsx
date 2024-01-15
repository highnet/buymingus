import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router'
import Hero from './Hero.tsx';
import Tokenomics from './Tokenomics.tsx';
import Disclaimer from './Disclaimer.tsx';
import Incinerator from './Incinerator.tsx';


import '@rainbow-me/rainbowkit/styles.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { http, createConfig, WagmiProvider } from 'wagmi'
import {
  polygon

} from 'wagmi/chains';

export const config = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http(),
  },
})

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
    <WagmiProvider config={config}>
      <RainbowKitProvider chains={[...config.chains]}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
