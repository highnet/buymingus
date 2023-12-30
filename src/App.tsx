import stylex from '@stylexjs/stylex';
import './App.css'
import Header from './Header'
import LazyImage from './LazyImage'
import Logo from './assets/logo.png'
import Hero from './Hero';
import Tokenomics from './Tokenomics';
import Disclaimer from './Disclaimer';
import Footer from './Footer';

const styles = stylex.create({
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
      <LazyImage style={styles.logo} src={[Logo]} />
      <Hero />
      <Tokenomics />
      <Disclaimer />
      <Footer />
    </>
  )
}

export default App


