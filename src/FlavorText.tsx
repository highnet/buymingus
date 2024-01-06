import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Button from "./Button";
import { Link } from "@tanstack/react-router";

const styles = stylex.create({
  default: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.4rem",
    marginTop: "4rem",
    backgroundColor: colors.choco8,
    clipPath: "polygon(0 1%,100% 0,100% 95%,0 100%);",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    color: "white",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  }
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function FlavorText({ style }: Props) {

  return <div {...stylex.props(styles.default, style)}>
    <p>Reclaiming the liquidity from cat tokens.</p>
    <Button large>
      <Link {...stylex.props(styles.link)} to="/incinerate" >INCINERATE CATS</Link>
    </Button>
  </div>;
}