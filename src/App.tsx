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
    width: "18rem",
    height: "18rem",
    transform: 'translateY(-10rem)',
    padding: "1.4rem",
    transition: 'transform 2.5s',
    position: 'absolute',
    ":hover":
    {
      transform: 'translateY(-10rem) rotate(360deg)',
    },
  }
});

function App() {

  return (
    <>
      <Header />
      <LazyImage style={styles.logo} src={Logo} />
      <Hero />
      <Tokenomics />
      <Disclaimer />
      <Footer />
    </>
  )
}

export default App


