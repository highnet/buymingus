import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Button from "./Button";
import Telegram from "./assets/telegram.png";
import Twitter from "./assets/twitter.png";
import Arbitrum from "./assets/arbitrum.png";
import Camelot from "./assets/camelot.png";
import Mirror from "./assets/mirror.jpg";
import RoadMap from "./assets/roadmap.png";
import LazyImage from "./LazyImage";
import Card from "./Card";
import FlavorText from "./FlavorText";

const styles = stylex.create({

  defaultHero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
    gap: "2rem",
    "@media (min-width: 601px)": {
      flexDirection: "row",
      paddingTop: "8rem",
      gap: "6rem",

    },
  },
  defaultHeroTitle: {
    color: "white",
    fontSize: "6.4rem",
    textAlign: "center",
    "@media (min-width: 601px)": {
      fontSize: "10.2rem",
    },
  },
  defaultHeroSlogan: {
    color: "white",
    fontSize: "1.8rem",
    textAlign: "center",
    "@media (min-width: 601px)": {
      fontSize: "4rem",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2.4rem",
    alignItems: "center",
    justifyContent: "center",
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
    ":hover": { scale: 1.2 },
  },
  button: {
    cursor: "pointer",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

const openDexScreener = () => {
  const url =
    "https://dexscreener.com/arbitrum/0x0807ccff97b714ff39e90e4f36b2eaf67a918af0";
  window.open(url, "_blank")?.focus();
};

const openCamelot = () => {
  const url =
    "https://app.camelot.exchange/?token2=0xA8F77a162f0d8fC775A2aaE9Ea855f293e5C9772";
  window.open(url, "_blank")?.focus();
};

const openMirror = () => {
  const url = "https://mirror.xyz/0x43E221c1f948a3858F98D74886B6B940f47B1AfC";
  window.open(url, "_blank")?.focus();
};

const openRoadmap = () => {
  const url =
    "https://mirror.xyz/0x43E221c1f948a3858F98D74886B6B940f47B1AfC/16CNXBQxWAQuftSXiz46cc_RIwPcIZbCC8wLggtSgdY";
  window.open(url, "_blank")?.focus();
};

export default function Hero({ style }: Props) {
  return (
    <div>
      <div {...stylex.props(styles.defaultHero, style)}>
        <div {...stylex.props(styles.defaultHeroTitle, style)}>$mingus</div>
      </div>
      <div >
        <FlavorText />
      </div>
      <div {...stylex.props(styles.defaultHero, style)}>
        <div {...stylex.props(styles.container)}>
          <Card onClick={openDexScreener}>
            MINGUS / WETH
            <LazyImage
              src={[Arbitrum]}
              style={styles.providerLogo}
              onClick={openDexScreener}
            />
          </Card>
          <Button onClick={openCamelot}>
            CAMELOT
            <LazyImage
              src={[Camelot]}
              style={styles.providerLogo}
              onClick={openCamelot}
            />
          </Button>
          <Button onClick={openRoadmap}>
            Roadmap
            <LazyImage
              src={[RoadMap]}
              style={styles.providerLogo}
              onClick={openRoadmap}
            />
          </Button>
          <Button onClick={openMirror}>
            Docs
            <LazyImage
              src={[Mirror]}
              style={styles.providerLogo}
              onClick={openMirror}
            />
          </Button>
          <div {...stylex.props(styles.socials)}>
            <div {...stylex.props(styles.socialLogo)}>
              <LazyImage
                src={[Twitter]}
                onClick={() =>
                  window.open("https://twitter.com/mingus_arb", "_blank")
                }
              />
            </div>
            <div {...stylex.props(styles.socialLogo)}>
              <LazyImage
                src={[Telegram]}
                onClick={() =>
                  window.open("https://t.me/+5wlA0R4BiMkxMTIx", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
