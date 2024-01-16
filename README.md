<h1 align="center">
  <img src="/src/assets/logo.png" width="250px"/>

Buy Mingus </br></br>
[https://mingus.co/](https://mingus.co/)

##

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
</div>
<div align="center""> 
<img alt="npm" src="https://img.shields.io/npm/v/vite?style=for-the-badge">
<img alt="node-current" src="https://img.shields.io/node/v/vite?style=for-the-badge">
</div>

## 🌐 Home Page

The Official [Buy Mingus](https://mingus.co/) Home Page

## ❓ How to get started?
```
yarn
yarn dev
```
-  ➜  Local:   [http://localhost:5173/](http://localhost:5173/) `yarn dev`
-  ➜  Network: [http://192.168.0.64:5173/](http://192.168.0.64:5173/) `yarn dev -- --host`
-  ➜  press h + enter to show help

## 🛠️ Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
  - with Hot Module Reload and ESLint rules.
- [StyleX CSS](https://github.com/nonzzz/vite-plugin-stylex)
  - StyleX is a simple, easy-to-use JavaScript syntax and compiler for styling web apps. StyleX combines the strengths and avoids the weaknesses of both inline styles and static CSS.

  - To define a style in ts:
    ```jsx
    import stylex from "@stylexjs/stylex";
    const styles = stylex.create({
      quad: {
        width: "100%",
        height: "100%",
      },
    });
    ```
  - Which then can be passed directly to any DOM component:
    ```jsx
    <div    
      {...stylex.props(styles.quad)}
    />
    ```
  - To define type-safe CSS component as props, Which then can be passed consumed by a ReactFC:
    ```jsx
    import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
    type Props = {
      style?: StyleXStyles<{
        color: string, // required
        margin?: string, // optional
      }>;
    };

    export default function Rect({ style }: Props) {
      return <div {...stylex.props(style, styles.quad)}
     />;
    ```
  - To easily create variants of components: 
    ```jsx
    const styles = stylex.create({
      defaultRect: {
        color: "red",
      },
     marginRect: {
        color: "blue",
        margin: "1rem",
      },
    });
    
    <Rect {...stylex.props(styles.defaultRect)} />
    <Rect {...stylex.props(styles.marginRect)} />
    ```


- [shadcn/ui](https://ui.shadcn.com/) 
  - Beautifully designed components built on top of Radix UI and Tailwind CSS that we can copy and paste into our app. Accessible. Customizable. Open Source.
- [trmd3](https://trmd3.com/)
  - A collection of reusable, minimal Material Design 3 React Components
- [rainbowkit](https://www.rainbowkit.com/)
  - a React library that makes it easy to add wallet connection to our dapp. Out-of-the-box wallet management, Easily customizable, Built on top of wagmi and viem
- [viem](https://viem.sh/)
  - Abstractions over the JSON-RPC API to make our life easier, browser native BigInt, utilities for working with ABIs (encoding/decoding/inspection)
- [wagmi](https://wagmi.sh/)
  - 40+ React Hooks for accounts, wallets, contracts, transactions, signing, ENS, and more. Wagmi also supports just about any wallet out there through it's official connectors, EIP-6963 support, and extensable API.
- [React-Hook-Form](https://react-hook-form.com/)
  - Performant, flexible and extensible forms with easy-to-use validation.
- [zod](https://github.com/colinhacks/zod)
  - TypeScript-first schema validation with static type inference

## 📚 Resources
- https://mingus.co/
- https://stylexjs.com/docs/learn/
- https://ui.shadcn.com/
- https://trmd3.com/
- https://www.rainbowkit.com/
- https://viem.sh/
- https://wagmi.sh/
- https://react-hook-form.com/
- https://github.com/colinhacks/zod
- https://github.com/nonzzz/vite-plugin-stylex



## 👥 Collaborators:

- [highnet](https://github.com/highnet)
- [0xrin](https://github.com/0xrin1)


<i>If you read this far, here is a cookie! 🍪</i>

