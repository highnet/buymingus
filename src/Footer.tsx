import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Arbitrum from "./assets/arbitrum.png";
import LazyImage from "./LazyImage";

const styles = stylex.create({
  defaultFooter: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "8rem",
    color: "white",
    backgroundColor: "black",
    padding: "3.2rem",
    marginTop: "4rem",
    fontSize: "1.6rem",
  },
  providerText: {
    display: "flex",
    alignItems: "center",
    gap: ".8rem",
  },
  providerLogo: {
    width: "2.4rem",
    height: "2.4rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Footer({ style }: Props) {
  return <div {...stylex.props(styles.defaultFooter, style)}>
    <div {...stylex.props(styles.providerText)}>
      <LazyImage style={styles.providerLogo} src={Arbitrum} />
      Powered by Arbitrum One
    </div>
  </div>;
}