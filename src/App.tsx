import stylex from '@stylexjs/stylex';
import './App.css'
import "trmd3components/trmd3.css";
import Header from './Header'
import LazyImage from './LazyImage'
import Logo from './assets/logo.png'
import Footer from './Footer';
import { Outlet } from '@tanstack/react-router';

const styles = stylex.create({
  root: {
    border: ".1rem solid white",
  },
  logo: {
    width: "12rem",
    height: "12rem",
    transform: 'translateY(-8rem)',
    margin: "0 0.8rem",
    transition: 'transform 2.5s',
    position: 'absolute',
    ":hover":
    {
      transform: 'translateY(-8rem) rotate(360deg)',
    },
    "@media (min-width: 601px)": {
      width: "18rem",
      height: "18rem",
      transform: 'translateY(-9rem)',
      margin: "0 2.4rem",
      ":hover":
      {
        transform: 'translateY(-9rem) rotate(360deg)',
      },
    },
  }
});

function App() {
  return (
    <>
      <Header />
      <div {...stylex.props(styles.root)}>
        <LazyImage style={styles.logo} src={[Logo]} />
        <Outlet />
      </div>
      <Footer />

    </>
  )
}

export default App


