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
  }
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Hero({ style }: Props) {
  return <div {...stylex.props(styles.defaultHero, style)}>
    <div {...stylex.props(styles.container)}>
      <Card>
        Lorem Ipsum
        <LazyImage src={Arbitrum} style={styles.providerLogo} />
      </Card>
      <Card>
        Lorem Ipsum
        <LazyImage src={Camelot} style={styles.providerLogo} />
      </Card>
      <Button>
        Lorem Ipsum
        <LazyImage src={Arbitrum} style={styles.providerLogo} />
      </Button>
      <Button>
        Lorem Ipsum
        <LazyImage src={Camelot} style={styles.providerLogo} />
      </Button>
      <div {...stylex.props(styles.socials)}>
        <div {...stylex.props(styles.socialLogo)}>
          <LazyImage src={Discord} onClick={() => window.open('http://discord.com', '_blank')} />
        </div>
        <div {...stylex.props(styles.socialLogo)}>
          <LazyImage src={Twitter} onClick={() => window.open('http://twitter.com', '_blank')} />
        </div>
        <div {...stylex.props(styles.socialLogo)}>
          <LazyImage src={Telegram} onClick={() => window.open('http://telegram.com', '_blank')} />
        </div>

      </div>
    </div>
    <div>
      <LazyImage src={SuperHero} style={styles.superHero} />
    </div>
  </div>;
}