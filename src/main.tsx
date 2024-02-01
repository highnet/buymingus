import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import Hero from "./Hero.tsx";
import Tokenomics from "./Tokenomics.tsx";
import Disclaimer from "./Disclaimer.tsx";
import Incinerator from "./Incinerator.tsx";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygon } from "wagmi/chains";

const { chains, publicClient } = configureChains([polygon], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Mingus Incinerator",
  projectId: "c543b09b1ec964af38e82af1d9689305",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const rootRoute = new RootRoute({
  component: () => <App />,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <Hero />
      <Tokenomics />
      <Disclaimer />
    </>
  ),
});

const incinerateRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "incinerate",
  component: () => {
    if (import.meta.env.VITE_ENV !== "production") {
      return <Incinerator />;
    } else {
      return null;
    }
  },
});

const routeTree = rootRoute.addChildren([indexRoute, incinerateRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
