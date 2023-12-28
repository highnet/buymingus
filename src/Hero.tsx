import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Button from "./Button";
import SuperHero from "./assets/superhero.jpg";
import Discord from "./assets/discord.png";
import Telegram from "./assets/telegram.png";
import Twitter from "./assets/twitter.png";
import Arbitrum from "./assets/arbitrum.png";
import Camelot from "./assets/camelot.png";
import LazyImage from "./LazyImage";
import Card from "./Card";

const styles = stylex.create({
  defaultHero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "8rem",
    gap: "6rem"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem",
    alignItems: "center",
  },
  superHero: {
    width: "32rem",
    height: "32rem",
    borderRadius: "50%",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    gap: "1.6rem",
    alignItems: "center",
  },
  providerLogo: {
    width: "5.2rem",
    height: "5.2rem",
  },
  socialLogo: {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    ":hover": { scale: 1.2 }
  },
  button: {
    cursor: "pointer",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

const openDexScreener = () => {
  const url = 'https://dexscreener.com/arbitrum/0x0807ccff97b714ff39e90e4f36b2eaf67a918af0';
  window.open(url, '_blank')?.focus();
};

const openCamelot = () => {
  const url = 'https://app.camelot.exchange/?token2=0xA8F77a162f0d8fC775A2aaE9Ea855f293e5C9772';
  window.open(url, '_blank')?.focus();
};

export default function Hero({ style }: Props) {
  return <div {...stylex.props(styles.defaultHero, style)}>
    <div {...stylex.props(styles.container)}>
      <Card onClick={openDexScreener} {...stylex.props(styles.button)}>
        MINGUS / WETH
        <LazyImage src={Arbitrum} style={styles.providerLogo} onClick={openDexScreener} />
      </Card>
      <Button onClick={openCamelot}>
        CAMELOT
        <LazyImage src={Camelot} style={styles.providerLogo} onClick={openCamelot} />
      </Button>
      <div {...stylex.props(styles.socials)}>
        <div {...stylex.props(styles.socialLogo)}>
          <LazyImage src={Twitter} onClick={() => window.open('https://twitter.com/mingus_arb', '_blank')} />
        </div>
        <div {...stylex.props(styles.socialLogo)}>
          <LazyImage src={Telegram} onClick={() => window.open('https://t.me/+5wlA0R4BiMkxMTIx', '_blank')} />
        </div>
      </div>
    </div>
    <div>
      <LazyImage src={SuperHero} style={styles.superHero} />
    </div>
  </div>;
}